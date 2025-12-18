import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { AllPoolInfo, NodePoolAssignmentConfig, RetiReaderSDK, ValidatorConfig, ValidatorCurState, ValidatorPoolInfo } from "./generated/RetiReaderSDK.js"
import { chunked } from "./utils/chunked.js"

export class RetiFastSDK {
  static ghost = RetiReaderSDK

  public algorand: AlgorandClient
  public registryAppId: bigint
  private ghostSDK: RetiReaderSDK

  constructor({ algorand, registryAppId, ghostAppId }: { algorand: AlgorandClient; registryAppId: number | bigint; ghostAppId?: bigint }) {
    this.algorand = algorand
    this.registryAppId = BigInt(registryAppId)
    this.ghostSDK = new RetiReaderSDK({ algorand: this.algorand, ghostAppId })
  }

  async getNumValidators(): Promise<number> {
    const { numV } = await this.algorand.app.getGlobalState(this.registryAppId)
    return Number(numV.value)
  }

  @chunked(127)
  async getValidatorConfig(validatorIds: number[] | bigint[]): Promise<ValidatorConfig[]> {
    console.log("Fetching validator configs for IDs:", validatorIds)
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.ghostSDK.getValidatorConfig({ registryAppId: this.registryAppId, validatorIds }, { extraFee })
  }

  @chunked(127)
  async getValidatorStates(validatorIds: number[] | bigint[]): Promise<ValidatorCurState[]> {
    console.log("Fetching validator states for IDs:", validatorIds)
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.ghostSDK.getValidatorStates({ registryAppId: this.registryAppId, validatorIds }, { extraFee })
  }

  async getPools(validatorIds: number[] | bigint[]): Promise<ValidatorPoolInfo["poolInfo"][][]> {
    const results = await this._internal_getPoolInfo(validatorIds)
    return validatorIds.map((vid) =>
      results
        .filter((r) => r.validatorId === BigInt(vid))
        .map((r) => r.poolInfo)
    )
  }

  @chunked(127)
  private async _internal_getPoolInfo(validatorIds: number[] | bigint[]): Promise<ValidatorPoolInfo[]> {
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.ghostSDK.getPools({ registryAppId: this.registryAppId, validatorIds }, { extraFee })
  }

  @chunked(127)
  async getNodePoolAssignments(validatorIds: number[] | bigint[]): Promise<NodePoolAssignmentConfig[]> {
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.ghostSDK.getNodePoolAssignments({ registryAppId: this.registryAppId, validatorIds }, { extraFee })
  }

  async getAllPoolInfo(validatorId: number): Promise<AllPoolInfo> {
    const extraFee = (4000).microAlgo()
    const [data] = await this.ghostSDK.getAllPoolInfo({ registryAppId: this.registryAppId, validatorIds: [validatorId] }, { extraFee })
    return data
  }

  async getBlockTimestamps(num: number): Promise<bigint[]> {
    // viable alternative would be to do validity = 1
    // but we will fetch lastRound to override params cache
    const { lastRound } = await this.algorand.client.algod.status().do()
    return this.ghostSDK.getBlockTimestamps({ num }, { firstValidRound: lastRound, lastValidRound: lastRound+1n })
  }
}
