# Health'Change Blockchain

- Currently, we have a base factort-child contract setup that will essentially go through a lot of modification.
- We use a Factory contract as a parent contract that is used as the starting point
- Everytime a new funding request is received, we create a child contract using the Factory contract as all the contracts will have similar functionality

## Future Work
The normal factory pattern wastes a lot of gas so instead we are using the EIP-1167 specification that uses a Proxy Contract in association with the `delegateCall` function to manage this.

## How it works?
The `Factory` contract is the main contract that serves as a Parent. Each time a new request for fundraising is recieved, a new `HealthChange` contract copy is deployed using the `Factory` contract.

## Addresses

### Ropsten
- Factory: [0xfF05e164D152F95c84944f3D0aC08f5C715464Fb](https://ropsten.etherscan.io/address/0xff05e164d152f95c84944f3d0ac08f5c715464fb#code)
- HealthChange sample: [0x9C1566534B27093136b3D2a19eC95c887Ab8f58F](https://ropsten.etherscan.io/address/0x9C1566534B27093136b3D2a19eC95c887Ab8f58F#code)

### Mainnet
- Factory: Coming Soon
- HealthChange sample: Coming Soon  