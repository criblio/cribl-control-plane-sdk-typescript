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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `acceleratedFields`                                                                                  | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Accelerated fields (materialized columns) for the cache connection.                                  |
| `backfillStatus`                                                                                     | [models.CacheConnectionBackfillStatus](../models/cacheconnectionbackfillstatus.md)                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `cacheRef`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Identifier of the Lakehouse cache referenced by the Dataset.                                         |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | Timestamp when the continuous data feed to the Lakehouse cache started, in Unix time (milliseconds). |
| `lakehouseConnectionType`                                                                            | [models.LakehouseConnectionType](../models/lakehouseconnectiontype.md)                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `migrationQueryId`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Query identifier of the active Lakehouse migration. Omitted if no migration is in progress.          |
| `retentionInDays`                                                                                    | *number*                                                                                             | :heavy_check_mark:                                                                                   | Retention period for the Lakehouse cache connection, in days.                                        |