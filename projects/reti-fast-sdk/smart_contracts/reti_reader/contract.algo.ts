import { Contract, log, uint64 } from "@algorandfoundation/algorand-typescript";
import { Reti, ValidatorCurState } from "../reti/contract.algo";
import { abimethod, compileArc4, encodeArc4, Uint16 } from "@algorandfoundation/algorand-typescript/arc4";

export class RetiReader extends Contract {
  @abimethod({ readonly: true, onCreate: 'require' })
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
}
