# DistributedSummary

Summary of the deployment for the specified Cribl product (Stream or Edge).

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 730340,
    destinations: 288563,
    packs: 431434,
    pipelines: 986284,
    quickConnects: 331251,
    routes: 385605,
    sources: 611291,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `groups`                                                                    | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)    | :heavy_check_mark:                                                          | Resource counts for Worker Groups or Edge Fleets in the deployment summary. |
| `workers`                                                                   | [models.Workers](../models/workers.md)                                      | :heavy_minus_sign:                                                          | Worker or Edge Node counts and health statistics in the deployment summary. |