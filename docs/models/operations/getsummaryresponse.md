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
        packs: 273.25,
        pipelines: 4362.13,
        quickConnects: 5084.29,
        routes: 8370.31,
        sources: 8558.62,
      },
      workers: {
        alive: 5991.49,
        confVersions: 5501.85,
        count: 9976.94,
        disconnectedCount: 7533.67,
        groups: 9363.42,
        softwareVersions: 9804.83,
        unhealthy: 3393.31,
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