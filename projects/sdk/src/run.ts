import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { RetiFastSDK } from "."

const registryAppId = 2714516089

const sdk = new RetiFastSDK({
  algorand: AlgorandClient.fromEnvironment(),
  registryAppId,
})

const validatorIds = new Array(128).fill(0).map((_, i) => i + 1)
sdk.getValidatorStates(validatorIds).then((states) => {
  console.log("Retrieved validator states:", states.length)
  console.log("Sample", states[0])
})
