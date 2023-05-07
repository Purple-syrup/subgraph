import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddressProviderChange,
  CompensateProvider,
  FallbackChange,
  FeeChange,
  ProviderAdded,
  RegistrarChange
} from "../generated/Contract/Contract"

export function createAddressProviderChangeEvent(
  oldAddress: Address,
  newAddress: Address
): AddressProviderChange {
  let addressProviderChangeEvent = changetype<AddressProviderChange>(
    newMockEvent()
  )

  addressProviderChangeEvent.parameters = new Array()

  addressProviderChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  addressProviderChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return addressProviderChangeEvent
}

export function createCompensateProviderEvent(
  provider: Address,
  amount: BigInt,
  signalId: BigInt,
  userId: BigInt
): CompensateProvider {
  let compensateProviderEvent = changetype<CompensateProvider>(newMockEvent())

  compensateProviderEvent.parameters = new Array()

  compensateProviderEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  compensateProviderEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  compensateProviderEvent.parameters.push(
    new ethereum.EventParam(
      "signalId",
      ethereum.Value.fromUnsignedBigInt(signalId)
    )
  )
  compensateProviderEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )

  return compensateProviderEvent
}

export function createFallbackChangeEvent(
  oldAddress: Address,
  newAddress: Address
): FallbackChange {
  let fallbackChangeEvent = changetype<FallbackChange>(newMockEvent())

  fallbackChangeEvent.parameters = new Array()

  fallbackChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  fallbackChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return fallbackChangeEvent
}

export function createFeeChangeEvent(
  oldFee: BigInt,
  newFee: BigInt
): FeeChange {
  let feeChangeEvent = changetype<FeeChange>(newMockEvent())

  feeChangeEvent.parameters = new Array()

  feeChangeEvent.parameters.push(
    new ethereum.EventParam("oldFee", ethereum.Value.fromUnsignedBigInt(oldFee))
  )
  feeChangeEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return feeChangeEvent
}

export function createProviderAddedEvent(provider: Address): ProviderAdded {
  let providerAddedEvent = changetype<ProviderAdded>(newMockEvent())

  providerAddedEvent.parameters = new Array()

  providerAddedEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )

  return providerAddedEvent
}

export function createRegistrarChangeEvent(
  oldAddress: Address,
  newAddress: Address
): RegistrarChange {
  let registrarChangeEvent = changetype<RegistrarChange>(newMockEvent())

  registrarChangeEvent.parameters = new Array()

  registrarChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  registrarChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return registrarChangeEvent
}
