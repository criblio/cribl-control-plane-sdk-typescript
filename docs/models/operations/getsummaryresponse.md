# GetSummaryResponse

a list of DistributedSummary objects

## Example Usage

```typescript
import { GetSummaryResponse } from "cribl-control-plane/models/operations";

let value: GetSummaryResponse = {
  count: 421794,
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_minus_sign:                                                | number of items present in the items array                        |
| `items`                                                           | [models.DistributedSummary](../../models/distributedsummary.md)[] | :heavy_minus_sign:                                                | N/A                                                               |