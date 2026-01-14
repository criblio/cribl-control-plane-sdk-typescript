# RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseDiscovery

## Example Usage

```typescript
import { RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseDiscovery = {
  discoverType: "http",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                                                                   | [models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseDiscoverType](../models/restauthenticationloginsecretgetauthtokenfromheaderfalsediscovertype.md) | :heavy_check_mark:                                                                                                                                               | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task.                                       |