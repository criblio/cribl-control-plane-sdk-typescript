# CollectorRest

Rest collector configuration

## Example Usage

```typescript
import { CollectorRest } from "cribl-control-plane/models";

let value: CollectorRest = {
  type: "rest",
  conf: {
    authentication: "hmac",
    hmacFunctionId: "<id>",
    discovery: {
      discoverType: "none",
    },
    collectUrl: "https://simplistic-cardboard.biz/",
    collectMethod: "get",
    collectVerb: "<value>",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pagination: {
      type: "none",
    },
    timeout: 0,
    useRoundRobinDns: false,
    disableTimeFilter: false,
    decodeUrl: true,
    rejectUnauthorized: false,
    captureHeaders: false,
    stopOnEmptyResults: false,
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    retryRules: {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      maxIntervalMs: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
    },
    __scheduling: {
      stateTracking: {
        enabled: true,
      },
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *"rest"*                   | :heavy_check_mark:         | Collector type             |
| `conf`                     | *models.RestCollectorConf* | :heavy_check_mark:         | N/A                        |