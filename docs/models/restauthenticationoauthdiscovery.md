# RestAuthenticationOauthDiscovery

## Example Usage

```typescript
import { RestAuthenticationOauthDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationOauthDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationOauthDiscoverType](../models/restauthenticationoauthdiscovertype.md)                             | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |