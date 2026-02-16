# DistributedSummary

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 8426.77,
    destinations: 4226.92,
    packs: 763.13,
    pipelines: 2162.69,
    quickConnects: 5829.93,
    routes: 9165.4,
    sources: 456.98,
  },
  workers: {
    alive: 9823.83,
    confVersions: 8569.21,
    count: 9371.81,
    disconnectedCount: 3118.3,
    groups: 9102.36,
    softwareVersions: 3140.68,
    unhealthy: 941.81,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.Groups](../models/groups.md)                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |