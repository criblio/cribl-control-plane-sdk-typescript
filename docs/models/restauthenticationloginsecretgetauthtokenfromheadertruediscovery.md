# RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrueDiscovery

## Example Usage

```typescript
import { RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrueDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrueDiscovery = {
  discoverType: "list",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                                                                 | [models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrueDiscoverType](../models/restauthenticationloginsecretgetauthtokenfromheadertruediscovertype.md) | :heavy_check_mark:                                                                                                                                             | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task.                                     |