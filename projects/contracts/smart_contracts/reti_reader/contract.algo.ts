import { clone, Contract, log, uint64 } from "@algorandfoundation/algorand-typescript";
import { PoolInfo, Reti, ValidatorCurState } from "../reti/contract.algo";
import { abimethod, compileArc4, encodeArc4, Uint16, Uint8 } from "@algorandfoundation/algorand-typescript/arc4";

export type ValidatorPoolInfo = {
  validatorId: uint64;
  // poolId: Uint8;
  poolInfo: PoolInfo;
};

export class RetiReader extends Contract {
  @abimethod({ readonly: true, onCreate: "allow" })
  getValidatorStates(registryAppId: uint64, validatorIds: uint64[]): ValidatorCurState {
    for (const validatorId of validatorIds) {
      const { returnValue } = compileArc4(Reti).call.getValidatorState({
        appId: registryAppId,
        args: [validatorId],
      });
      log(encodeArc4(returnValue));
    }
    return {
      numPools: new Uint16(0),
      totalStakers: 0,
      totalAlgoStaked: 0,
      rewardTokenHeldBack: 0,
    };
  }

  @abimethod({ readonly: true, onCreate: "allow" })
  getPools(registryAppId: uint64, validatorIds: uint64[]): ValidatorPoolInfo {
    for (const validatorId of validatorIds) {
      const { returnValue: poolInfoArr } = compileArc4(Reti).call.getPools({
        appId: registryAppId,
        args: [validatorId],
      });
      for (const poolInfo of clone(poolInfoArr)) {
        log(encodeArc4({ validatorId, poolInfo }));
      }
    }

    return {
      validatorId: 0,
      poolInfo: {
        poolAppId: 0,
        totalStakers: new Uint16(0),
        totalAlgoStaked: 0,
      },
    };
  }
}
