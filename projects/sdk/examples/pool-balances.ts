import { AlgorandClient } from "@algorandfoundation/algokit-utils"
import { RetiGhostSDK } from "../src"

const registryAppId = 2714516089

const sdk = new RetiGhostSDK({
  algorand: AlgorandClient.mainNet(),
  registryAppId,
})

;(async () => {
  const numValidators = await sdk.getNumValidators()
  const validatorIds = Array(numValidators)
    .fill(0)
    .map((_, i) => i + 1)
  const pools = await sdk.getPools(validatorIds)

  const poolAppIds = pools.flatMap((p) => p.map((pool) => pool.poolAppId))

  console.log({ poolAppIds, len: poolAppIds.length })
  const start = Date.now()
  const balancesAndPayouts = await sdk.getPoolBalancesAndLastPayouts(poolAppIds)
  const end = Date.now()
  console.log("Pool Balances and Last Payouts", balancesAndPayouts)
  console.log(`Fetched ${balancesAndPayouts.length} pool balances and last payouts in ${end - start}ms`)
})()
