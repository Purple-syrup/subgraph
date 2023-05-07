import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddressProviderChange } from "../generated/schema"
import { AddressProviderChange as AddressProviderChangeEvent } from "../generated/Contract/Contract"
import { handleAddressProviderChange } from "../src/contract"
import { createAddressProviderChangeEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let oldAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddressProviderChangeEvent = createAddressProviderChangeEvent(
      oldAddress,
      newAddress
    )
    handleAddressProviderChange(newAddressProviderChangeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddressProviderChange created and stored", () => {
    assert.entityCount("AddressProviderChange", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddressProviderChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressProviderChange",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
