# CollectorSplunk

## Example Usage

```typescript
import { CollectorSplunk } from "cribl-control-plane/models";

let value: CollectorSplunk = {
  type: "splunk",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
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
  retryRules: {
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                    | [models.CollectorSplunkType](../models/collectorsplunktype.md)                                                            | :heavy_check_mark:                                                                                                        | Collector type: splunk                                                                                                    |
| `searchHead`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Search head base URL. Can be an expression. Default is https://localhost:8089.                                            |
| `search`                                                                                                                  | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Examples: 'index=myAppLogs level=error channel=myApp' OR '\| mstats avg(myStat) as myStat WHERE index=myStatsIndex.'      |
| `earliest`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The earliest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-16m@m' |
| `latest`                                                                                                                  | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The latest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-1m@m'    |
| `endpoint`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | REST API used to create a search                                                                                          |
| `outputMode`                                                                                                              | [models.CollectorSplunkOutputMode](../models/collectorsplunkoutputmode.md)                                                | :heavy_minus_sign:                                                                                                        | Format of the returned output                                                                                             |
| `collectRequestParams`                                                                                                    | [models.CollectRequestParam](../models/collectrequestparam.md)[]                                                          | :heavy_minus_sign:                                                                                                        | Optional collect request parameters                                                                                       |
| `collectRequestHeaders`                                                                                                   | [models.CollectorSplunkCollectRequestHeader](../models/collectorsplunkcollectrequestheader.md)[]                          | :heavy_minus_sign:                                                                                                        | Optional collect request headers                                                                                          |
| `authentication`                                                                                                          | [models.CollectorSplunkAuthentication](../models/collectorsplunkauthentication.md)                                        | :heavy_minus_sign:                                                                                                        | Authentication method for Discover and Collect REST calls                                                                 |
| `timeout`                                                                                                                 | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | HTTP request inactivity timeout. Use 0 for no timeout.                                                                    |
| `useRoundRobinDns`                                                                                                        | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                            |
| `disableTimeFilter`                                                                                                       | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Disable collector event time filtering when a date range is specified                                                     |
| `rejectUnauthorized`                                                                                                      | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                         |
| `handleEscapedChars`                                                                                                      | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Escape characters (\") in search queries will be passed directly to Splunk                                                |
| `retryRules`                                                                                                              | [models.CollectorSplunkRetryRules](../models/collectorsplunkretryrules.md)                                                | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |