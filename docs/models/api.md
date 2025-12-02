# Api

## Example Usage

```typescript
import { Api } from "cribl-control-plane/models";

let value: Api = {
  baseUrl: "https://fragrant-loaf.net/",
  disableApiCache: true,
  disabled: false,
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  host: "french-citizen.org",
  idleSessionTTL: 5168.39,
  listenOnPort: false,
  loginRateLimit: "<value>",
  port: 6343.38,
  protocol: "<value>",
  scripts: false,
  sensitiveFields: [
    "<value 1>",
    "<value 2>",
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

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `baseUrl`                      | *string*                       | :heavy_minus_sign:             | N/A                            |
| `disableApiCache`              | *boolean*                      | :heavy_minus_sign:             | N/A                            |
| `disabled`                     | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `headers`                      | Record<string, *string*>       | :heavy_minus_sign:             | N/A                            |
| `host`                         | *string*                       | :heavy_check_mark:             | N/A                            |
| `idleSessionTTL`               | *number*                       | :heavy_minus_sign:             | N/A                            |
| `listenOnPort`                 | *boolean*                      | :heavy_minus_sign:             | N/A                            |
| `loginRateLimit`               | *string*                       | :heavy_minus_sign:             | N/A                            |
| `port`                         | *number*                       | :heavy_check_mark:             | N/A                            |
| `protocol`                     | *string*                       | :heavy_minus_sign:             | N/A                            |
| `scripts`                      | *boolean*                      | :heavy_minus_sign:             | N/A                            |
| `sensitiveFields`              | *string*[]                     | :heavy_minus_sign:             | N/A                            |
| `ssl`                          | [models.Ssl](../models/ssl.md) | :heavy_minus_sign:             | N/A                            |
| `ssoRateLimit`                 | *string*                       | :heavy_minus_sign:             | N/A                            |
| `workerRemoteAccess`           | *boolean*                      | :heavy_minus_sign:             | N/A                            |