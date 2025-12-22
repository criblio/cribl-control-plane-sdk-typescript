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
    defaultBreakers: "Cribl",
    scheduling: {
      stateTracking: {
        enabled: true,
      },
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"database"*                                                       | :heavy_check_mark:                                                 | Collector type: database                                           |
| `conf`                                                             | [models.DatabaseCollectorConf](../models/databasecollectorconf.md) | :heavy_check_mark:                                                 | N/A                                                                |