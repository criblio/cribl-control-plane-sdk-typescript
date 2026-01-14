# CollectorSplunk

Splunk collector configuration

## Example Usage

```typescript
import { CollectorSplunk } from "cribl-control-plane/models";

let value: CollectorSplunk = {
  type: "splunk",
  conf: {
    authentication: "basic",
    username: "Roxane84",
    password: "6l5mrPhEvtGkTuL",
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
    timeout: 8145.29,
    useRoundRobinDns: false,
    disableTimeFilter: true,
    rejectUnauthorized: false,
    handleEscapedChars: false,
    retryRules: {
      type: "none",
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