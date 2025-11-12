# CountedDistributedSummary

## Example Usage

```typescript
import { CountedDistributedSummary } from "cribl-control-plane/models";

let value: CountedDistributedSummary = {
  count: 197987,
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_minus_sign:                                             | number of items present in the items array                     |
| `items`                                                        | [models.DistributedSummary](../models/distributedsummary.md)[] | :heavy_minus_sign:                                             | N/A                                                            |