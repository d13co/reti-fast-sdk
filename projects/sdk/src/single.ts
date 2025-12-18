import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { RetiFastSDK } from "."

const registryAppId = 2714516089

const sdk = new RetiFastSDK({
  algorand: AlgorandClient.mainNet(),
  registryAppId,
})

;(async () => {
  console.time("run")

  const numValidators = await sdk.getNumValidators()
  for (let i = 1; i <= numValidators; i++) {
    const data = await sdk.getAllPoolInfo(i)
    console.log(i, data)
    console.log("  --")
  }

  console.timeEnd("run")
})()
