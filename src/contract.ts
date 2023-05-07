import {
  AddressProviderChange as AddressProviderChangeEvent,
  CompensateProvider as CompensateProviderEvent,
  ProviderAdded as ProviderAddedEvent,
  RegistrarChange as RegistrarChangeEvent
} from "../generated/Contract/Contract"
import {
  AddressProviderChange,
  CompensateProvider,
  ProviderAdded,
  RegistrarChange
} from "../generated/schema"

export function handleAddressProviderChange(
  event: AddressProviderChangeEvent
): void {
  let entity = new AddressProviderChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAddress = event.params.oldAddress
  entity.newAddress = event.params.newAddress

  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCompensateProvider(event: CompensateProviderEvent): void {
  let entity = new CompensateProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.amount = event.params.amount
  entity.signalId = event.params.signalId
  entity.userId = event.params.userId

  entity.transactionHash = event.transaction.hash

  entity.save()
}



export function handleProviderAdded(event: ProviderAddedEvent): void {
  let entity = new ProviderAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider


  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistrarChange(event: RegistrarChangeEvent): void {
  let entity = new RegistrarChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAddress = event.params.oldAddress
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
