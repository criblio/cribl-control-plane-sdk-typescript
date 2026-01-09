# ApiTypeSystemSettingsConf

## Example Usage

```typescript
import { ApiTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: ApiTypeSystemSettingsConf = {
  baseUrl: "https://near-ostrich.net/",
  disableApiCache: true,
  disabled: false,
  headers: {
    "key": "<value>",
  },
  host: "shallow-lift.info",
  idleSessionTTL: 1861.66,
  listenOnPort: false,
  loginRateLimit: "<value>",
  port: 7036.67,
  protocol: "<value>",
  scripts: false,
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
  workerRemoteAccess: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `baseUrl`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disableApiCache`                                                                | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `headers`                                                                        | Record<string, *string*>                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `host`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `idleSessionTTL`                                                                 | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `listenOnPort`                                                                   | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `loginRateLimit`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `port`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `protocol`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `scripts`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `sensitiveFields`                                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `ssl`                                                                            | [models.SslTypeSystemSettingsConfApi](../models/ssltypesystemsettingsconfapi.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `ssoRateLimit`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workerRemoteAccess`                                                             | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |