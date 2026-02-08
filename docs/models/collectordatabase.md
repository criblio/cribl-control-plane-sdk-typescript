# CollectorDatabase

Database collector configuration

## Example Usage

```typescript
import { CollectorDatabase } from "cribl-control-plane/models";

let value: CollectorDatabase = {
  type: "database",
  conf: {
    connectionId: "<id>",
    query: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"database"*                                                       | :heavy_check_mark:                                                 | Collector type                                                     |
| `conf`                                                             | [models.DatabaseCollectorConf](../models/databasecollectorconf.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `destructive`                                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | Delete any files collected (where applicable)                      |
| `encoding`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Character encoding to use when parsing ingested data.              |