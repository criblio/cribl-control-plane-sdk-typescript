# Collector

## Example Usage

```typescript
import { Collector } from "cribl-control-plane/models";

let value: Collector = {
  type: "<value>",
  conf: {
    type: "database",
    connectionId: "<id>",
    query: "<value>",
    queryValidationEnabled: true,
    defaultBreakers: "Cribl",
    scheduling: {
      stateTracking: {
        enabled: false,
      },
    },
  },
  encoding: "<value>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The type of collector to run                                                                                                                              |
| `conf`                                                                                                                                                    | *models.CollectorConf*                                                                                                                                    | :heavy_check_mark:                                                                                                                                        | Collector configuration                                                                                                                                   |
| `destructive`                                                                                                                                             | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Delete any files collected (where applicable)                                                                                                             |
| `encoding`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Character encoding to use when parsing ingested data. When not set, @{product} will default to UTF-8 but may incorrectly interpret multi-byte characters. |