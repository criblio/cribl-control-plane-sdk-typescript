# DistributedSummary

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 8426.77,
    destinations: 4226.92,
    pipelines: 763.13,
    routes: 2162.69,
    sources: 5829.93,
  },
  workers: {
    alive: 9165.4,
    confVersions: 456.98,
    count: 9823.83,
    disconnectedCount: 8569.21,
    groups: 9371.81,
    softwareVersions: 3118.3,
    unhealthy: 9102.36,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |