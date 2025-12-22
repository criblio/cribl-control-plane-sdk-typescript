# CollectorRest

Rest collector configuration

## Example Usage

```typescript
import { CollectorRest } from "cribl-control-plane/models";

let value: CollectorRest = {
  type: "rest",
  conf: {
    discovery: {},
    collectUrl: "https://easy-republican.com",
    collectVerb: "<value>",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pagination: {},
    safeHeaders: [
      "<value 1>",
    ],
    retryRules: {
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      maxIntervalMs: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
    },
    scheduling: {
      stateTracking: {
        enabled: false,
      },
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *"rest"*                                                   | :heavy_check_mark:                                         | Collector type: rest                                       |
| `conf`                                                     | [models.RestCollectorConf](../models/restcollectorconf.md) | :heavy_check_mark:                                         | N/A                                                        |