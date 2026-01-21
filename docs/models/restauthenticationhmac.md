# RestAuthenticationHmac

## Example Usage

```typescript
import { RestAuthenticationHmac } from "cribl-control-plane/models";

let value: RestAuthenticationHmac = {
  authentication: "hmac",
  hmacFunctionId: "<id>",
  discovery: {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  },
  collectUrl: "https://puny-unibody.biz/",
  collectMethod: "get",
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
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 6092.87,
  },
  timeout: 6806.28,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: false,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authentication`                                                                                                                                   | *"hmac"*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers. |
| `hmacFunctionId`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Select or create an HMAC Function to use with authentication                                                                                       |
| `discovery`                                                                                                                                        | *models.RestAuthenticationHmacDiscovery*                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | URL (constant or JavaScript expression) to use for the Collect operation                                                                           |
| `collectMethod`                                                                                                                                    | [models.RestAuthenticationHmacCollectMethod](../models/restauthenticationhmaccollectmethod.md)                                                     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectVerb`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.ItemsTypeRestCollectMethodGetCollectRequestParams](../models/itemstyperestcollectmethodgetcollectrequestparams.md)[]                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `pagination`                                                                                                                                       | *models.RestAuthenticationHmacPaginationUnion*                                                                                                     | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout. Use 0 to disable.                                                                                                 |
| `useRoundRobinDns`                                                                                                                                 | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                                                     |
| `disableTimeFilter`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Disable Collector event time filtering when a date range is specified                                                                              |
| `decodeUrl`                                                                                                                                        | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Decode the URL before sending requests (including pagination requests)                                                                             |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                                  |
| `captureHeaders`                                                                                                                                   | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to add response headers to the resHeaders field under the __collectible object                                                              |
| `stopOnEmptyResults`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Stop pagination when the Event Breaker produces no events                                                                                          |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text                                                                                                 |
| `retryRules`                                                                                                                                       | *models.RestAuthenticationHmacRetryRules*                                                                                                          | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduling`                                                                                                                                       | [models.RestAuthenticationHmacScheduling](../models/restauthenticationhmacscheduling.md)                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |