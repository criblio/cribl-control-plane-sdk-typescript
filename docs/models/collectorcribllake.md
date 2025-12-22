# CollectorCriblLake

CriblLake collector configuration

## Example Usage

```typescript
import { CollectorCriblLake } from "cribl-control-plane/models";

let value: CollectorCriblLake = {
  type: "cribl_lake",
  conf: {
    dataset: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"cribl_lake"*                                                       | :heavy_check_mark:                                                   | Collector type: cribl_lake                                           |
| `conf`                                                               | [models.CriblLakeCollectorConf](../models/cribllakecollectorconf.md) | :heavy_check_mark:                                                   | N/A                                                                  |