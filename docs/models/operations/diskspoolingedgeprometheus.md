# DiskSpoolingEdgePrometheus

## Example Usage

```typescript
import { DiskSpoolingEdgePrometheus } from "cribl-control-plane/models/operations";

let value: DiskSpoolingEdgePrometheus = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `enable`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Spool events on disk for Cribl Edge and Search. Default is disabled.                                               |
| `timeWindow`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Time period for grouping spooled events. Default is 10m.                                                           |
| `maxDataSize`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum disk space that can be consumed before older buckets are deleted. Examples: 420MB, 4GB. Default is 1GB.    |
| `maxDataTime`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum amount of time to retain data before older buckets are deleted. Examples: 2h, 4d. Default is 24h.          |
| `compress`                                                                                                         | [operations.PersistenceCompressionEdgePrometheus](../../models/operations/persistencecompressionedgeprometheus.md) | :heavy_minus_sign:                                                                                                 | Data compression format. Default is gzip.                                                                          |