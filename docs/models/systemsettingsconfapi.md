# SystemSettingsConfApi

## Example Usage

```typescript
import { SystemSettingsConfApi } from "cribl-control-plane/models";

let value: SystemSettingsConfApi = {
  baseUrl: "https://unkempt-spork.com/",
  disableApiCache: false,
  disabled: true,
  headers: {
    "key": "<value>",
  },
  host: "fatal-hunger.org",
  idleSessionTTL: 3269.48,
  listenOnPort: false,
  loginRateLimit: "<value>",
  port: 5814.66,
  protocol: "<value>",
  scripts: true,
  sensitiveFields: [
    "<value 1>",
  ],
  ssl: {
    caPath: "<value>",
    certPath: "<value>",
    disabled: false,
    passphrase: "<value>",
    privKeyPath: "<value>",
  },
  ssoRateLimit: "<value>",
  workerRemoteAccess: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `baseUrl`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `disableApiCache`                                                  | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | Record<string, *string*>                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `host`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `idleSessionTTL`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `listenOnPort`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `loginRateLimit`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `port`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `protocol`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `scripts`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `sensitiveFields`                                                  | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `ssl`                                                              | [models.SystemSettingsConfSsl](../models/systemsettingsconfssl.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `ssoRateLimit`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `workerRemoteAccess`                                               | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |