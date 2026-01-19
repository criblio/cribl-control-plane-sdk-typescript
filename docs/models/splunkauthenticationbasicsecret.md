# SplunkAuthenticationBasicSecret

## Example Usage

```typescript
import { SplunkAuthenticationBasicSecret } from "cribl-control-plane/models";

let value: SplunkAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
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
  timeout: 723.75,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  rejectUnauthorized: true,
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `authentication`                                                                                                                 | *"basicSecret"*                                                                                                                  | :heavy_check_mark:                                                                                                               | Authentication method for Discover and Collect REST calls                                                                        |
| `credentialsSecret`                                                                                                              | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Select or create a stored secret that references your credentials                                                                |
| `searchHead`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Search head base URL. Can be an expression. Default is https://localhost:8089.                                                   |
| `search`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Examples: 'index=myAppLogs level=error channel=myApp' OR '\| mstats avg(myStat) as myStat WHERE index=myStatsIndex.'             |
| `earliest`                                                                                                                       | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The earliest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-16m@m'        |
| `latest`                                                                                                                         | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The latest time boundary for the search. Can be an exact or relative time. Examples: '2022-01-14T12:00:00Z' or '-1m@m'           |
| `endpoint`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | REST API used to create a search                                                                                                 |
| `outputMode`                                                                                                                     | [models.OutputModeOptionsSplunkCollectorConf](../models/outputmodeoptionssplunkcollectorconf.md)                                 | :heavy_check_mark:                                                                                                               | Format of the returned output                                                                                                    |
| `collectRequestParams`                                                                                                           | [models.SplunkAuthenticationBasicSecretCollectRequestParam](../models/splunkauthenticationbasicsecretcollectrequestparam.md)[]   | :heavy_minus_sign:                                                                                                               | Optional collect request parameters                                                                                              |
| `collectRequestHeaders`                                                                                                          | [models.SplunkAuthenticationBasicSecretCollectRequestHeader](../models/splunkauthenticationbasicsecretcollectrequestheader.md)[] | :heavy_minus_sign:                                                                                                               | Optional collect request headers                                                                                                 |
| `timeout`                                                                                                                        | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | HTTP request inactivity timeout. Use 0 for no timeout.                                                                           |
| `useRoundRobinDns`                                                                                                               | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                                   |
| `disableTimeFilter`                                                                                                              | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Disable collector event time filtering when a date range is specified                                                            |
| `rejectUnauthorized`                                                                                                             | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                |
| `handleEscapedChars`                                                                                                             | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Escape characters (\") in search queries will be passed directly to Splunk                                                       |
| `retryRules`                                                                                                                     | [models.SplunkAuthenticationBasicSecretRetryRules](../models/splunkauthenticationbasicsecretretryrules.md)                       | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |