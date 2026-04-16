# DistributedSummary

Summary of the deployment for the specified Cribl product (Stream or Edge).

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 842677,
    destinations: 422692,
    packs: 76313,
    pipelines: 216269,
    quickConnects: 582993,
    routes: 916540,
    sources: 45698,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_minus_sign:                                                         | N/A                                                                        |