# Context

The gas fees are a major concern for the users of the platform. The platform should be designed in a way that the gas
fees are reduced as much as possible.

# Constraints

- The platform should be decentralized
- The platform should be easy to use
- The platform should be cheap to use
- The platform should be secure
- The platform should be scalable

# Studied Options

## Store concert list in factory

- Easy but not scalable, and not cheap
- Stores only the address of the concert

## Emit concert created event - VALIDATED

- Cheap and easy to use
- Still in the blockchain
- Can store more than just the address
- Can be used to retrieve data
- Indexing is possible

## Store concert data in contract

- Easy but pricey

## Emit event with all data - VALIDATED

- Cheap and easy to use
- Still in the blockchain
- Can be used to retrieve data
- Indexing is possible

## Store concert data in IPFS - VALIDATED

- Decentralized
- Cheap but can't be used to filter

(Not implemented)

## Store concert images in IPFS - VALIDATED

- Decentralized

(Not implemented)
