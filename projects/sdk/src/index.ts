import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { RetiReaderSDK, ValidatorCurState } from "./generated/RetiReaderSDK.js"
import { chunked } from "./utils/chunked.js"

export class RetiFastSDK {
  public algorand: AlgorandClient
  public registryAppId: number | bigint
  private ghostSDK: RetiReaderSDK

  constructor({ algorand, registryAppId }: { algorand: AlgorandClient; registryAppId: number | bigint }) {
    this.algorand = algorand
    this.registryAppId = registryAppId
    this.ghostSDK = new RetiReaderSDK({ algorand: this.algorand })
  }

  @chunked(127)
  async getValidatorStates(validatorIds: number[] | bigint[]): Promise<ValidatorCurState[]> {
    const extraFee = (1000 * validatorIds.length).microAlgo()
    return this.ghostSDK.getValidatorStates({ registryAppId: this.registryAppId, validatorIds }, { extraFee })
  }
}
