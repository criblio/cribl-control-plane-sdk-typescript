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
    searchHead: "https://localhost:8089",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    endpoint: "/services/search/v2/jobs/export",
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
    timeout: 0,
    useRoundRobinDns: false,
    disableTimeFilter: true,
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
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"splunk"*                   | :heavy_check_mark:           | Collector type               |
| `conf`                       | *models.SplunkCollectorConf* | :heavy_check_mark:           | N/A                          |