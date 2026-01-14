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
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"splunk"*                   | :heavy_check_mark:           | Collector type               |
| `conf`                       | *models.SplunkCollectorConf* | :heavy_check_mark:           | N/A                          |