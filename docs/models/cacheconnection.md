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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `acceleratedFields`                                                                                     | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | Accelerated fields (materialized columns) for the cache connection.                                     |
| `cacheRef`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier for the Lakehouse cache referenced by the Dataset.                                    |
| `createdAt`                                                                                             | *number*                                                                                                | :heavy_check_mark:                                                                                      | Timestamp (in Unix time) when the continuous data feed to the Lakehouse cache started, in milliseconds. |
| `lakehouseConnectionType`                                                                               | [models.LakehouseConnectionType](../models/lakehouseconnectiontype.md)                                  | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `migrationQueryId`                                                                                      | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier for the active Lakehouse migration query. Omitted if no migration is in progress.     |
| `retentionInDays`                                                                                       | *number*                                                                                                | :heavy_check_mark:                                                                                      | Retention period for the Lakehouse cache connection, in days.                                           |