# RestAuthenticationGoogleOauth

## Example Usage

```typescript
import { RestAuthenticationGoogleOauth } from "cribl-control-plane/models";

let value: RestAuthenticationGoogleOauth = {
  authentication: "google_oauth",
  scopes: [
    "<value 1>",
  ],
  serviceAccountCredentials: "<value>",
  subject: "<value>",
  discovery: {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  },
  collectUrl: "https://measly-humor.info/",
  collectMethod: "post_with_body",
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
    type: "response_body",
    attribute: [
      "<value 1>",
      "<value 2>",
    ],
    maxPages: 3827.37,
    lastPageExpr: "<value>",
  },
  timeout: 8962.3,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: false,
  captureHeaders: false,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
| `authentication`                                                                                                                                   | *"google_oauth"*                                                                                                                                   | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers. |
| `scopes`                                                                                                                                           | *string*[]                                                                                                                                         | :heavy_check_mark:                                                                                                                                 | Scopes to use during authentication. See [Google's docs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.     |
| `serviceAccountCredentials`                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Contents of Google Cloud service account credentials (JSON keys) file. To upload a file, click the upload icon in this field's upper right.        |
| `subject`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Email address of a user account with Super Admin permissions to the resources the collector will retrieve                                          |
| `discovery`                                                                                                                                        | *models.RestAuthenticationGoogleOauthDiscovery*                                                                                                    | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | URL (constant or JavaScript expression) to use for the Collect operation                                                                           |
| `collectMethod`                                                                                                                                    | [models.RestAuthenticationGoogleOauthCollectMethod](../models/restauthenticationgoogleoauthcollectmethod.md)                                       | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectVerb`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.ItemsTypeRestCollectMethodGetCollectRequestParams](../models/itemstyperestcollectmethodgetcollectrequestparams.md)[]                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `pagination`                                                                                                                                       | *models.RestAuthenticationGoogleOauthPaginationUnion*                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout. Use 0 to disable.                                                                                                 |
| `useRoundRobinDns`                                                                                                                                 | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.                                                     |
| `disableTimeFilter`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Disable Collector event time filtering when a date range is specified                                                                              |
| `decodeUrl`                                                                                                                                        | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Decode the URL before sending requests (including pagination requests)                                                                             |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Reject certificates that cannot be verified against a valid CA (such as self-signed certificates)                                                  |
| `captureHeaders`                                                                                                                                   | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to add response headers to the resHeaders field under the __collectible object                                                              |
| `stopOnEmptyResults`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Stop pagination when the Event Breaker produces no events                                                                                          |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text                                                                                                 |
| `retryRules`                                                                                                                                       | *models.RestAuthenticationGoogleOauthRetryRules*                                                                                                   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduling`                                                                                                                                       | [models.RestAuthenticationGoogleOauthScheduling](../models/restauthenticationgoogleoauthscheduling.md)                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |