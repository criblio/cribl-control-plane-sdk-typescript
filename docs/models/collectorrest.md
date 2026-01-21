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
      discoverMethod: "post_with_body",
      discoverBody: "<value>",
      discoverType: "http",
      discoverUrl: "https://sweet-giant.info/",
      discoverVerb: "<value>",
      discoverRequestParams: "<value>",
      discoverRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pagination: {
        type: "<value>",
      },
      discoverDataField: "<value>",
      enableStrictDiscoverParsing: true,
      discoverResponseFormat: "<value>",
      enableDiscoverCode: true,
    },
    collectUrl: "https://true-cow.name",
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
      type: "request_offset",
      offsetField: "<value>",
      offset: 2713.22,
      limitField: "<value>",
      limit: 8073.59,
      totalRecordField: "<value>",
      maxPages: 8005.17,
      zeroIndexed: true,
    },
    timeout: 5200.78,
    useRoundRobinDns: true,
    disableTimeFilter: false,
    decodeUrl: true,
    rejectUnauthorized: true,
    captureHeaders: false,
    stopOnEmptyResults: true,
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    retryRules: {
      type: "static",
      interval: "<value>",
      limit: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
      multiplier: "<value>",
      maxIntervalMs: "<value>",
    },
    __scheduling: {
      stateTracking: {
        enabled: true,
      },
    },
  },
  destructive: true,
  encoding: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"rest"*                                              | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.RestCollectorConf*                            | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |