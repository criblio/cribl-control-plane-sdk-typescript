# RestAuthenticationBasicSecretDiscovery

## Example Usage

```typescript
import { RestAuthenticationBasicSecretDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationBasicSecretDiscovery = {
  discoverType: "none",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationBasicSecretDiscoverType](../models/restauthenticationbasicsecretdiscovertype.md)                 | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |