# DistributedSummary

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 1533.36,
    destinations: 96.11,
    pipelines: 273.25,
    routes: 4362.13,
    sources: 5084.29,
  },
  workers: {
    alive: 8370.31,
    confVersions: 8558.62,
    count: 5991.49,
    disconnectedCount: 5501.85,
    groups: 9976.94,
    softwareVersions: 7533.67,
    unhealthy: 9363.42,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `groups`                                                                   | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.DistributedSummaryWorkers](../models/distributedsummaryworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |