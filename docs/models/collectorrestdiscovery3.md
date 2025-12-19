# CollectorRestDiscovery3

## Example Usage

```typescript
import { CollectorRestDiscovery3 } from "cribl-control-plane/models";

let value: CollectorRestDiscovery3 = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.CollectorRestDiscoverType3](../models/collectorrestdiscovertype3.md)                                               | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |