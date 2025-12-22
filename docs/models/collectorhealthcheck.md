# CollectorHealthCheck

HealthCheck collector configuration

## Example Usage

```typescript
import { CollectorHealthCheck } from "cribl-control-plane/models";

let value: CollectorHealthCheck = {
  type: "health_check",
  conf: {
    discovery: {},
    collectUrl: "https://late-pantyhose.name",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    retryRules: {
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *"health_check"*                                                         | :heavy_check_mark:                                                       | Collector type: health_check                                             |
| `conf`                                                                   | [models.HealthCheckCollectorConf](../models/healthcheckcollectorconf.md) | :heavy_check_mark:                                                       | N/A                                                                      |