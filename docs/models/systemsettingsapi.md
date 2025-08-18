# SystemSettingsApi

## Example Usage

```typescript
import { SystemSettingsApi } from "cribl-control-plane/models";

let value: SystemSettingsApi = {
  baseUrl: "https://sparkling-ecliptic.biz/",
  disableApiCache: true,
  disabled: false,
  headers: {},
  host: "frank-kit.name",
  idleSessionTTL: 2347.78,
  listenOnPort: false,
  loginRateLimit: "<value>",
  port: 4304.41,
  protocol: "<value>",
  scripts: true,
  sensitiveFields: [
    "<value 1>",
  ],
  ssl: {
    caPath: "<value>",
    certPath: "<value>",
    disabled: true,
    passphrase: "<value>",
    privKeyPath: "<value>",
  },
  ssoRateLimit: "<value>",
  workerRemoteAccess: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `baseUrl`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `disableApiCache`                                                  | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | [models.SystemSettingsHeaders](../models/systemsettingsheaders.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `host`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `idleSessionTTL`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `listenOnPort`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `loginRateLimit`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `port`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `protocol`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `scripts`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `sensitiveFields`                                                  | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `ssl`                                                              | [models.SystemSettingsSsl](../models/systemsettingsssl.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `ssoRateLimit`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `workerRemoteAccess`                                               | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |