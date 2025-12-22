# DiscoveryRest

## Example Usage

```typescript
import { DiscoveryRest } from "cribl-control-plane/models";

let value: DiscoveryRest = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.DiscoverTypeRest](../models/discovertyperest.md)                                                                   | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |