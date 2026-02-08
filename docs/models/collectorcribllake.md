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
| `type`                                                               | *"cribl_lake"*                                                       | :heavy_check_mark:                                                   | Collector type                                                       |
| `conf`                                                               | [models.CriblLakeCollectorConf](../models/cribllakecollectorconf.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `destructive`                                                        | *boolean*                                                            | :heavy_minus_sign:                                                   | Delete any files collected (where applicable)                        |
| `encoding`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Character encoding to use when parsing ingested data.                |