# CollectorSplunk

Splunk collector configuration

## Example Usage

```typescript
import { CollectorSplunk } from "cribl-control-plane/models";

let value: CollectorSplunk = {
  type: "splunk",
  conf: {
    authentication: "basic",
    username: "Enrico53",
    password: "a6l5mrPhEvtGkTu",
    searchHead: "<value>",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    endpoint: "<value>",
    outputMode: "json",
    collectRequestParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    timeout: 2992.03,
    useRoundRobinDns: true,
    disableTimeFilter: true,
    rejectUnauthorized: true,
    handleEscapedChars: false,
    retryRules: {
      type: "static",
      interval: "<value>",
      limit: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
      multiplier: "<value>",
    },
  },
  destructive: true,
  encoding: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"splunk"*                                            | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.SplunkCollectorConf*                          | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |