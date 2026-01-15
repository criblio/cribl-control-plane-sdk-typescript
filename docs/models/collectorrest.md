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
      discoverType: "http",
    },
    collectUrl: "https://close-decision.net",
    collectMethod: "post",
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
      type: "response_header",
    },
    timeout: 4762.75,
    useRoundRobinDns: true,
    disableTimeFilter: false,
    decodeUrl: false,
    rejectUnauthorized: true,
    captureHeaders: false,
    stopOnEmptyResults: true,
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    retryRules: {
      type: "none",
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
        enabled: false,
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