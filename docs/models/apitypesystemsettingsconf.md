# ApiTypeSystemSettingsConf

## Example Usage

```typescript
import { ApiTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: ApiTypeSystemSettingsConf = {
  disabled: true,
  host: "near-ostrich.net",
  port: 218.09,
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