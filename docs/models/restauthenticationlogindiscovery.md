# RestAuthenticationLoginDiscovery

## Example Usage

```typescript
import { RestAuthenticationLoginDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationLoginDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationLoginDiscoverType](../models/restauthenticationlogindiscovertype.md)                             | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |