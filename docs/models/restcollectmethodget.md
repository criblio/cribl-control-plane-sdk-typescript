# RestCollectMethodGet

## Example Usage

```typescript
import { RestCollectMethodGet } from "cribl-control-plane/models";

let value: RestCollectMethodGet = {
  collectMethod: "post",
  collectRequestParams: "<value>",
  discovery: {
    discoverType: "none",
  },
  collectUrl: "https://uncomfortable-napkin.net",
  collectVerb: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 8754.14,
  },
  authentication: "none",
  timeout: 220.4,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "none",
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
| `collectMethod`                                                                                                                                    | [models.RestCollectMethodGetCollectMethod](../models/restcollectmethodgetcollectmethod.md)                                                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `discovery`                                                                                                                                        | *models.RestCollectMethodGetDiscovery*                                                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | URL (constant or JavaScript expression) to use for the Collect operation                                                                           |
| `collectVerb`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.ItemsTypeRestCollectMethodGetCollectRequestParams](../models/itemstyperestcollectmethodgetcollectrequestparams.md)[]                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `pagination`                                                                                                                                       | *models.RestCollectMethodGetPaginationUnion*                                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `authentication`                                                                                                                                   | [models.RestCollectMethodGetAuthentication](../models/restcollectmethodgetauthentication.md)                                                       | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers. |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout. Use 0 to disable.                                                                                                 |
| `useRoundRobinDns`                                                                                                                                 | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                                                     |
| `disableTimeFilter`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Disable Collector event time filtering when a date range is specified                                                                              |
| `decodeUrl`                                                                                                                                        | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Decode the URL before sending requests (including pagination requests)                                                                             |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                                  |
| `captureHeaders`                                                                                                                                   | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to add response headers to the resHeaders field under the __collectible object                                                              |
| `stopOnEmptyResults`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Stop pagination when the Event Breaker produces no events                                                                                          |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text                                                                                                 |
| `retryRules`                                                                                                                                       | *models.RestCollectMethodGetRetryRules*                                                                                                            | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduling`                                                                                                                                       | [models.RestCollectMethodGetScheduling](../models/restcollectmethodgetscheduling.md)                                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |