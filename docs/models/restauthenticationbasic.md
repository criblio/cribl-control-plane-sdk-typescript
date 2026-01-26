# RestAuthenticationBasic

## Example Usage

```typescript
import { RestAuthenticationBasic } from "cribl-control-plane/models";

let value: RestAuthenticationBasic = {
  authentication: "basic",
  username: "Tito40",
  password: "4Drf49LK5Hpg6tC",
  discovery: {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  },
  collectUrl: "https://stark-sightseeing.org/",
  collectMethod: "other",
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
    type: "request_page",
    pageField: "<value>",
    page: 8801.26,
    sizeField: "<value>",
    size: 5432.45,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 9390.45,
    zeroIndexed: true,
  },
  timeout: 2162.73,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  decodeUrl: false,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "backoff",
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authentication`                                                                                                                                   | *"basic"*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers. |
| `username`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `password`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `discovery`                                                                                                                                        | *models.RestAuthenticationBasicDiscovery*                                                                                                          | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | URL (constant or JavaScript expression) to use for the Collect operation                                                                           |
| `collectMethod`                                                                                                                                    | [models.RestAuthenticationBasicCollectMethod](../models/restauthenticationbasiccollectmethod.md)                                                   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectVerb`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.ItemsTypeRestCollectMethodGetCollectRequestParams](../models/itemstyperestcollectmethodgetcollectrequestparams.md)[]                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `pagination`                                                                                                                                       | *models.RestAuthenticationBasicPaginationUnion*                                                                                                    | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout. Use 0 to disable.                                                                                                 |
| `useRoundRobinDns`                                                                                                                                 | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                                                     |
| `disableTimeFilter`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Disable Collector event time filtering when a date range is specified                                                                              |
| `decodeUrl`                                                                                                                                        | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Decode the URL before sending requests (including pagination requests)                                                                             |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                                  |
| `captureHeaders`                                                                                                                                   | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to add response headers to the resHeaders field under the __collectible object                                                              |
| `stopOnEmptyResults`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Stop pagination when the Event Breaker produces no events                                                                                          |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text                                                                                                 |
| `retryRules`                                                                                                                                       | *models.RestAuthenticationBasicRetryRules*                                                                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduling`                                                                                                                                       | [models.RestAuthenticationBasicScheduling](../models/restauthenticationbasicscheduling.md)                                                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |