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
    queryValidationEnabled: true,
    defaultBreakers: "Cribl",
    __scheduling: {
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
| `type`                                                             | *"database"*                                                       | :heavy_check_mark:                                                 | Collector type                                                     |
| `conf`                                                             | [models.DatabaseCollectorConf](../models/databasecollectorconf.md) | :heavy_check_mark:                                                 | N/A                                                                |