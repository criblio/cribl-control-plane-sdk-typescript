# CacheConnection

## Example Usage

```typescript
import { CacheConnection } from "cribl-control-plane/models";

let value: CacheConnection = {
  acceleratedFields: [
    "<value 1>",
    "<value 2>",
  ],
  backfillStatus: "finished",
  cacheRef: "<value>",
  createdAt: 5990.6,
  lakehouseConnectionType: "cache",
  migrationQueryId: "<id>",
  retentionInDays: 2885.84,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `acceleratedFields`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `backfillStatus`                                                                   | [models.CacheConnectionBackfillStatus](../models/cacheconnectionbackfillstatus.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `cacheRef`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lakehouseConnectionType`                                                          | [models.LakehouseConnectionType](../models/lakehouseconnectiontype.md)             | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `migrationQueryId`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `retentionInDays`                                                                  | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |