# RestAuthenticationLoginSecretDiscovery

## Example Usage

```typescript
import { RestAuthenticationLoginSecretDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationLoginSecretDiscovery = {
  discoverType: "none",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationLoginSecretDiscoverType](../models/restauthenticationloginsecretdiscovertype.md)                 | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |