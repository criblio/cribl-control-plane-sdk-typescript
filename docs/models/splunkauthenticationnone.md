# SplunkAuthenticationNone

## Example Usage

```typescript
import { SplunkAuthenticationNone } from "cribl-control-plane/models";

let value: SplunkAuthenticationNone = {
  authentication: "none",
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
| `authentication`                                                                                                          | *"none"*                                                                                                                  | :heavy_check_mark:                                                                                                        | Authentication method for Discover and Collect REST calls                                                                 |
| `searchHead`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Search head base URL. Can be an expression. Default is https://localhost:8089.                                            |
| `search`                                                                                                                  | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Examples: 'index=myAppLogs level=error channel=myApp' OR '\| mstats avg(myStat) as myStat WHERE index=myStatsIndex.'      |
| `earliest`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The earliest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-16m@m' |
| `latest`                                                                                                                  | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The latest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-1m@m'    |
| `endpoint`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | REST API used to create a search                                                                                          |
| `outputMode`                                                                                                              | [models.OutputModeOptionsSplunkCollectorConf](../models/outputmodeoptionssplunkcollectorconf.md)                          | :heavy_minus_sign:                                                                                                        | Format of the returned output                                                                                             |
| `collectRequestParams`                                                                                                    | [models.SplunkAuthenticationNoneCollectRequestParam](../models/splunkauthenticationnonecollectrequestparam.md)[]          | :heavy_minus_sign:                                                                                                        | Optional collect request parameters                                                                                       |
| `collectRequestHeaders`                                                                                                   | [models.SplunkAuthenticationNoneCollectRequestHeader](../models/splunkauthenticationnonecollectrequestheader.md)[]        | :heavy_minus_sign:                                                                                                        | Optional collect request headers                                                                                          |
| `timeout`                                                                                                                 | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | HTTP request inactivity timeout. Use 0 for no timeout.                                                                    |
| `useRoundRobinDns`                                                                                                        | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                            |
| `disableTimeFilter`                                                                                                       | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Disable collector event time filtering when a date range is specified                                                     |
| `rejectUnauthorized`                                                                                                      | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                         |
| `handleEscapedChars`                                                                                                      | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Escape characters (\") in search queries will be passed directly to Splunk                                                |
| `retryRules`                                                                                                              | [models.SplunkAuthenticationNoneRetryRules](../models/splunkauthenticationnoneretryrules.md)                              | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |