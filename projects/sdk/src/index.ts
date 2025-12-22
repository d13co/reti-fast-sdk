import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import {
  Validator,
  NodePoolAssignmentConfig,
  RetiReaderSDK,
  ValidatorConfig,
  ValidatorCurState,
  ValidatorPoolInfo,
  AssetInfo as AssetInfoBase,
  MbrAmountsAndProtocolConstraints,
} from "./generated/RetiReaderSDK.js"
import { chunked } from "./utils/chunked.js"
import { chunk } from "./utils/chunk.js"
import { ALGORAND_ZERO_ADDRESS_STRING } from "algosdk"

export { Validator } from "./generated/RetiReaderSDK.js"

export type PoolBalanceAndLastPayout = {
  balance: bigint
  lastPayout: bigint
}

export type AssetInfo =
  | {
      index: bigint
      deleted: true
    }
  | {
      index: bigint
      params: {
        creator: string
        total: bigint
        decimals: number
        unitName: string
        name: string
      }
    }

export class RetiGhostSDK {
  static baseSDK = RetiReaderSDK

  public algorand: AlgorandClient
  public registryAppId: bigint
  public baseSDK: RetiReaderSDK
  public concurrency: number

  constructor({
    algorand,
    registryAppId,
    concurrency = 4,
    ghostAppId,
  }: {
    algorand: AlgorandClient
    concurrency?: number
    registryAppId: number | bigint
    ghostAppId?: bigint
  }) {
    this.algorand = algorand
    this.registryAppId = BigInt(registryAppId)
    this.concurrency = concurrency
    this.baseSDK = new RetiReaderSDK({
      algorand: this.algorand,
      readerAccount: "Y76M3MSY6DKBRHBL7C3NNDXGS5IIMQVQVUAB6MP4XEMMGVF2QWNPL226CA",
      ghostAppId,
    })
  }

  async getNumValidators(): Promise<number> {
    /**
     * Reads the number of validators from the registry app global state.
     * @returns Number of validators in the registry.
     */
    const { numV } = await this.algorand.app.getGlobalState(this.registryAppId)
    return Number(numV.value)
  }

  /**
   * Get the MBR amounts and protocol constraints from Reti Registry
   * @returns MbrAmountsAndProtocolConstraints
   */
  async getMbrAmountsAndProtocolConstraints(): Promise<MbrAmountsAndProtocolConstraints> {
    const extraFee = (2000).microAlgo()
    const [data] = await this.baseSDK.getMbrAmountsAndProtocolConstraints({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId },
      extraMethodCallArgs: { extraFee },
    })
    return data
  }

  /**
   * Fetch multiple validator configs efficiently.\
   * Handles chunking internally with chunk size of 127.
   * @param validatorIds
   * @returns Array of `ValidatorConfig`, preserving input order.
   */
  @chunked(127)
  async getValidatorConfig(validatorIds: number[] | bigint[]): Promise<ValidatorConfig[]> {
    console.log("Fetching validator configs for IDs:", validatorIds)
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.baseSDK.getValidatorConfig({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId, validatorIds },
      extraMethodCallArgs: { extraFee },
    })
  }

  @chunked(127)
  async getValidatorStates(validatorIds: number[] | bigint[]): Promise<ValidatorCurState[]> {
    /**
     * Fetch multiple validators' current states.
     * Handles chunking internally with chunk size of 127.
     * Respects per-call concurrency set via the SDK constructor.
     * @param validatorIds Array of validator IDs.
     * @returns Array of `ValidatorCurState`, preserving input order.
     */
    console.log("Fetching validator states for IDs:", validatorIds)
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.baseSDK.getValidatorStates({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId, validatorIds },
      extraMethodCallArgs: { extraFee },
    })
  }

  async getPools(validatorIds: number[] | bigint[]): Promise<ValidatorPoolInfo["poolInfo"][][]> {
    /**
     * Fetch pool info arrays per validator.
     * Internally calls a chunked reader method and groups results by validator ID.
     * @param validatorIds Array of validator IDs.
     * @returns Array of arrays of pool info tuples per validator (input order preserved).
     */
    const results = await this._internal_getPoolInfo(validatorIds)
    return validatorIds.map((vid) => results.filter((r) => r.validatorId === BigInt(vid)).map((r) => r.poolInfo))
  }

  @chunked(127)
  private async _internal_getPoolInfo(validatorIds: number[] | bigint[]): Promise<ValidatorPoolInfo[]> {
    /**
     * Internal chunked reader call for pool info.
     * Chunk size 127; returns flattened `ValidatorPoolInfo` entries.
     * @param validatorIds Array of validator IDs.
     * @returns Array of `{ validatorId, poolInfo }` entries (flattened).
     */
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.baseSDK.getPools({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId, validatorIds },
      extraMethodCallArgs: { extraFee },
    })
  }

  @chunked(127)
  async getNodePoolAssignments(validatorIds: number[] | bigint[]): Promise<NodePoolAssignmentConfig[]> {
    /**
     * Fetch node→pool assignment config for each validator.
     * Handles chunking internally with chunk size of 127.
     * @param validatorIds Array of validator IDs.
     * @returns Array of `NodePoolAssignmentConfig`, preserving input order.
     */
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.baseSDK.getNodePoolAssignments({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId, validatorIds },
      extraMethodCallArgs: { extraFee },
    })
  }

  /**
   * Fetch multiple validators' config/state/pools/nodePoolAssignments efficiently. Handles chunking internally with chunk size of 64.
   * @param validatorIds
   * @returns Validator[] { config: ValidatorConfig, curState: ValidatorCurState, pools: ValidatorPoolInfo["poolInfo"][], nodePoolAssignment: NodePoolAssignmentConfig }
   */
  @chunked(64)
  async getValidators(validatorIds: number[]): Promise<Validator[]> {
    /**
     * Fetch validators' config, state, poolInfo[], and nodeAssignment in one aggregated call.
     * Handles chunking internally with chunk size of 64; per-call concurrency applies.
     * Preserves the input order in the returned array.
     * @param validatorIds Array of validator IDs.
     * @returns Array of `Validator` where each item contains `{ config, state, poolInfo, nodeAssignment }`.
     */
    const extraFee = (validatorIds.length * 4000).microAlgo()
    const data = await this.baseSDK.getValidators({
      methodArgsOrArgsArray: { registryAppId: this.registryAppId, validatorIds },
      extraMethodCallArgs: { extraFee },
    })
    return data
  }

  @chunked(255)
  async getPoolAlgodVersions(poolAppIds: number[] | bigint[]): Promise<string[]> {
    /**
     * Fetch `algod` version strings for many pool apps.
     * Uses app references for speed; chunk size 255.
     * @param poolAppIds Array of pool application IDs.
     * @returns Array of version strings, preserving input order.
     */
    const args = chunk(
      poolAppIds.map((p) => Number(p)),
      16,
    )
    const extraMethodCallArgs = args.map((chunk) => ({ accessReferences: chunk.map((id) => ({ appId: BigInt(id) })) }))
    return this.baseSDK.getAlgodVersion({
      methodArgsOrArgsArray: args.map((chunk) => ({ poolAppIds: chunk })),
      extraMethodCallArgs,
    })
  }

  async getBlockTimestamps(num: number): Promise<bigint[]> {
    /**
     * Fetch the timestamps of the last `num` blocks via the ghost reader.
     * Aligns validity window to current status round to avoid stale params cache.
     * @param num Number of blocks to read.
     * @returns Array of block timestamps as bigints.
     */
    // viable alternative would be to do validity = 1
    // but we will fetch lastRound to override params cache
    const { lastRound } = await this.algorand.client.algod.status().do()
    return this.baseSDK.getBlockTimestamps({
      methodArgsOrArgsArray: { num },
      extraMethodCallArgs: { firstValidRound: lastRound, lastValidRound: lastRound + 3n },
    })
  }

  @chunked(128)
  async getAssets(assetIds: number[] | bigint[]): Promise<AssetInfo[]> {
    /**
     * Read asset metadata for many ASA IDs and return a simplified union.
     * `{ deleted: true }` when asset is deleted or found; otherwise basic params.
     * Chunk size 128; per-call concurrency applies.
     * @param assetIds Array of asset IDs.
     * @returns Array of `AssetInfo` union values.
     */
    const assets: AssetInfo[] = []
    const data = await this.baseSDK.getAssets({
      methodArgsOrArgsArray: { assetIds },
    })
    for (const asset of data) {
      if (asset.creator === ALGORAND_ZERO_ADDRESS_STRING) {
        assets.push({ index: asset.assetId, deleted: true })
      } else {
        assets.push({
          index: asset.assetId,
          params: {
            creator: asset.creator,
            total: asset.total,
            decimals: asset.decimals,
            unitName: asset.unitName,
            name: asset.name,
          },
        })
      }
    }
    return assets
  }

  @chunked(128)
  async getPoolBalancesAndLastPayouts(poolAppIds: number[] | bigint[]): Promise<PoolBalanceAndLastPayout[]> {
    /**
     * Read pool balances and last payout time for many pool apps.
     * Chunk size 128; returns a simple object per pool app ID in input order.
     * @param poolAppIds Array of pool application IDs.
     * @returns Array of `{ balance, lastPayout }` objects, with input order preserved.
     */
    const data = await this.baseSDK.getPoolBalancesAndLastPayouts({
      methodArgsOrArgsArray: { poolAppIds },
    })
    return data.map(([balance, lastPayout]) => ({
      balance, lastPayout
    }))
  }
}
