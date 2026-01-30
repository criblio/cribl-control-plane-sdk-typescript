# CollectorSplunk

Splunk collector configuration

## Example Usage

```typescript
import { CollectorSplunk } from "cribl-control-plane/models";

let value: CollectorSplunk = {
  type: "splunk",
  conf: {
    authentication: "none",
    searchHead: "<value>",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    endpoint: "<value>",
    outputMode: "csv",
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
    timeout: 8513.39,
    useRoundRobinDns: false,
    disableTimeFilter: false,
    rejectUnauthorized: false,
    handleEscapedChars: false,
    retryRules: {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
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