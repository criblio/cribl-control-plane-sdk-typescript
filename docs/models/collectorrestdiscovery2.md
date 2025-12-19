# CollectorRestDiscovery2

## Example Usage

```typescript
import { CollectorRestDiscovery2 } from "cribl-control-plane/models";

let value: CollectorRestDiscovery2 = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.CollectorRestDiscoverType2](../models/collectorrestdiscovertype2.md)                                               | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |