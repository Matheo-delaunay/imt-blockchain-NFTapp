# Context

We need to implement a login system for our application. We need to decide which service to use.

# Constraints

- We need to have a secure login system
- We need to have a simple login system
- We need to have a system that is easy to implement
- We need to have a system that is easy to maintain
- We need to have a system that is easy to scale
- If possible, it should be used by users not familiar with blockchain

# Studied Options

## Metamask

Pro's

- Easy to implement
- Secure

Con's

- Not user friendly
- Not a lot of users have it installed

**Rejected because it is not user friendly**

## RainbowKit

Pro's

- Easy to implement
- Secure
- User friendly
- Permit to use a lot of different wallets

Con's

- Users need to have a wallet

**Rejected because users need to have a wallet**

## Magic.link

Pro's

- Secure
- User friendly
- Connect to a lot of different wallets
- Connection with email
- Email wallets are noncustodial

Con's

- Horrible documentation

**Rejected because of the documentation**

## Reown - Validated

Pro's

- Secure
- User friendly
- Connect to a lot of different wallets
- Connection with email
- Email wallets are noncustodial
- Next.js integration

Con's

- Bad documentation, but better than Magic.link

**Validated because it is the best option**
