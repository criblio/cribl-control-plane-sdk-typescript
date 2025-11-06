# CountedListDistributedSummary

## Example Usage

```typescript
import { CountedListDistributedSummary } from "cribl-control-plane/models";

let value: CountedListDistributedSummary = {
  count: 151518,
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_minus_sign:                                             | number of items present in the items array                     |
| `items`                                                        | [models.DistributedSummary](../models/distributedsummary.md)[] | :heavy_minus_sign:                                             | N/A                                                            |