# CollectorRestDiscovery

## Example Usage

```typescript
import { CollectorRestDiscovery } from "cribl-control-plane/models";

let value: CollectorRestDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.CollectorRestDiscoverType](../models/collectorrestdiscovertype.md)                                                 | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |