# DistributedSummary

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 1204.41,
    destinations: 8683.12,
    packs: 7143.15,
    pipelines: 7102.09,
    quickConnects: 6617.98,
    routes: 6137.57,
    sources: 7913.56,
  },
  workers: {
    alive: 2840.51,
    confVersions: 2105.62,
    count: 2109.21,
    disconnectedCount: 2638.62,
    groups: 4163.97,
    softwareVersions: 5635.1,
    unhealthy: 4966.29,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.Groups](../models/groups.md)                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |