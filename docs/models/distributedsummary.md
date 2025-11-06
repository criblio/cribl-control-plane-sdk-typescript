# DistributedSummary

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 9468.07,
    destinations: 8687.09,
    packs: 1836.43,
    pipelines: 5337.71,
    quickConnects: 8289.5,
    routes: 6739.16,
    sources: 9516.94,
  },
  workers: {
    alive: 1975.12,
    confVersions: 772.69,
    count: 8886.2,
    disconnectedCount: 7217.89,
    groups: 3608.53,
    softwareVersions: 9981.54,
    unhealthy: 4236.56,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |