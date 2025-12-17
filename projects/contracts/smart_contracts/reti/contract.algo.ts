import { Contract, err, uint64 } from '@algorandfoundation/algorand-typescript'
import { abimethod, Uint16 } from '@algorandfoundation/algorand-typescript/arc4'

/*
 * Reti interface for strongly typed calls from our ghost reader
 */

export type ValidatorCurState = {
    numPools: Uint16 // current number of pools this validator has - capped at MaxPools
    totalStakers: uint64 // total number of stakers across all pools of THIS validator
    totalAlgoStaked: uint64 // total amount staked to this validator across ALL of its pools
    // amount of the reward token held back in pool 1 for paying out stakers their rewards.
    // as reward tokens are assigned to stakers - the amount as part of each epoch will be updated
    // in this value and this amount has to be assumed 'spent' - only reducing this number as the token
    // is actually sent out by request of the validator itself
    rewardTokenHeldBack: uint64
}

export class Reti extends Contract {
  @abimethod({ readonly: true })
    getValidatorState(validatorId: uint64): ValidatorCurState {
      err('stub')
    }
}
