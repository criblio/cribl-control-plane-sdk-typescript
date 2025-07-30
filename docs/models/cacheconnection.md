# CacheConnection

## Example Usage

```typescript
import { CacheConnection } from "cribl-control-plane/models";

let value: CacheConnection = {
  cacheRef: "<value>",
  createdAt: 4271.29,
  retentionInDays: 7452.06,
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