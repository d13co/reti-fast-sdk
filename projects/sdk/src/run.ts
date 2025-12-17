import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { RetiFastSDK } from "."

const numValidators = 196
const registryAppId = 2714516089

const sdk = new RetiFastSDK({
  algorand: AlgorandClient.fromEnvironment(),
  registryAppId,
})

const validatorIds = new Array(numValidators).fill(0).map((_, i) => i + 1)

;(async () => {
  sdk.getValidatorStates(validatorIds).then((states) => {
    console.log("Retrieved validator states:", states.length)
    console.log("Sample", states[0])
  })

  sdk.getPools(validatorIds).then((pools) => {
    console.log("Retrieved pools:", pools.length)
    console.log("Samples", pools[62], pools[94], pools[95])
  })
  // at time of writing:
  // validator id 63 has 0
  // validator id 95 has 3
  // validator id 96 has 1

})()
