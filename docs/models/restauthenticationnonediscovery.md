# RestAuthenticationNoneDiscovery

## Example Usage

```typescript
import { RestAuthenticationNoneDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationNoneDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationNoneDiscoverType](../models/restauthenticationnonediscovertype.md)                               | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |