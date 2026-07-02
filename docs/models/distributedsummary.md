# DistributedSummary

Summary of the deployment for the specified Cribl product (Stream or Edge).

## Example Usage

```typescript
import { DistributedSummary } from "cribl-control-plane/models";

let value: DistributedSummary = {
  groups: {
    count: 388538,
    destinations: 754661,
    packs: 332881,
    pipelines: 427163,
    quickConnects: 948628,
    routes: 563689,
    sources: 260108,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `groups`                                                                    | [models.DistributedSummaryGroups](../models/distributedsummarygroups.md)    | :heavy_check_mark:                                                          | Resource counts for Worker Groups or Edge Fleets in the deployment summary. |
| `workers`                                                                   | [models.Workers](../models/workers.md)                                      | :heavy_minus_sign:                                                          | Worker or Edge Node counts and health statistics in the deployment summary. |