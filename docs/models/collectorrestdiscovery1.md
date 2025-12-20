# CollectorRestDiscovery1

## Example Usage

```typescript
import { CollectorRestDiscovery1 } from "cribl-control-plane/models";

let value: CollectorRestDiscovery1 = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.CollectorRestDiscoverType1](../models/collectorrestdiscovertype1.md)                                               | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |