# Context

We need to create collection for each concert automatically.

# Constraints

- Collection should be created automatically
- Collection should be created with specific data
- Create collection should be cheap
- Create collection should be easy to retrieve

# Studied Options

## Factory with new keyword

Pro's

- Easiest way to create collection

Con's

- Not cheap

**Rejected because it is not cheap**

## Factory with assembly

Pro's

- Cheaper than new keyword

Con's

- Not easy to understand
- Not easy to maintain or optimize

**Rejected because we found a better option**

## Cloning with proxy (ERC‑1167) - VALIDATED

ERC‑1167 defines a minimal proxy pattern that lets a factory deploy extremely lightweight contracts which delegate all
calls to a single implementation contract. ERC‑1167 clones hardcode the implementation address in their bytecode instead
of storing it. This avoids expensive storage operations, reducing gas costs while keeping the address immutable. Clones
are non-upgradeable, so it assure our tickets won't be changed. The price reduction will be more and more significant as
the number of clones increases.

Pro's

- Cheaper than factory with assembly
- Easy to understand
- Easy to maintain
- Very, VERY, cheap
- Immutable

**Validated because it is cheap, easy to understand and easy to maintain**
