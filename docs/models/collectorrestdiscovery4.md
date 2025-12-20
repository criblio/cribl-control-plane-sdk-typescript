# CollectorRestDiscovery4

## Example Usage

```typescript
import { CollectorRestDiscovery4 } from "cribl-control-plane/models";

let value: CollectorRestDiscovery4 = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.CollectorRestDiscoverType4](../models/collectorrestdiscovertype4.md)                                               | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |