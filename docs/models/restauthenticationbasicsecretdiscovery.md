# RestAuthenticationBasicSecretDiscovery

## Example Usage

```typescript
import { RestAuthenticationBasicSecretDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationBasicSecretDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationBasicSecretDiscoverType](../models/restauthenticationbasicsecretdiscovertype.md)                 | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |