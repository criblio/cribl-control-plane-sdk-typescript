# SystemSettingsConf

## Example Usage

```typescript
import { SystemSettingsConf } from "cribl-control-plane/models";

let value: SystemSettingsConf = {
  api: {
    baseUrl: "https://dreary-pendant.name/",
    disableApiCache: false,
    disabled: false,
    headers: {
      "key": "<value>",
    },
    host: "clumsy-onset.biz",
    idleSessionTTL: 6135.82,
    listenOnPort: false,
    loginRateLimit: "<value>",
    port: 6369.14,
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
    workerRemoteAccess: true,
  },
  backups: {},
  customLogo: {},
  pii: {
    enablePiiDetection: true,
  },
  proxy: {},
  rollback: {
    rollbackEnabled: false,
    rollbackRetries: 8496.74,
    rollbackTimeout: 3039.97,
  },
  shutdown: {},
  sni: {
    disableSNIRouting: false,
  },
  sockets: {
    directory: "/tmp",
  },
  support: {
    featureFlagOverrides: [
      {
        disabled: true,
        flagId: "<id>",
      },
    ],
  },
  system: {
    intercom: false,
    upgrade: "false",
  },
  tls: {},
  upgradeGroupSettings: {
    isRolling: true,
    quantity: 8257.32,
    retryCount: 9323.66,
    retryDelay: 1.27,
  },
  upgradeSettings: {
    automaticUpgradeCheckPeriod: "<value>",
    disableAutomaticUpgrade: true,
    enableLegacyEdgeUpgrade: true,
    packageUrls: [
      {
        packageHashUrl: "https://strict-alliance.info/",
        packageUrl: "https://cuddly-bathhouse.info",
      },
    ],
    upgradeSource: "<value>",
  },
  workers: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `api`                                                                      | [models.SystemSettingsConfApi](../models/systemsettingsconfapi.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `backups`                                                                  | *models.BackupsSettingsUnion*                                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `customLogo`                                                               | *models.CustomLogoUnion*                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `pii`                                                                      | *models.PiiSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `proxy`                                                                    | *models.ProxySettingsUnion*                                                | :heavy_check_mark:                                                         | N/A                                                                        |
| `rollback`                                                                 | *models.RollbackSettingsUnion*                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `shutdown`                                                                 | *models.ShutdownSettingsUnion*                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `sni`                                                                      | *models.SniSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `sockets`                                                                  | [models.SystemSettingsConfSockets](../models/systemsettingsconfsockets.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `support`                                                                  | [models.SystemSettingsConfSupport](../models/systemsettingsconfsupport.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `system`                                                                   | [models.SystemSettingsConfSystem](../models/systemsettingsconfsystem.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `tls`                                                                      | *models.TlsSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `upgradeGroupSettings`                                                     | *models.UpgradeGroupSettingsUnion*                                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `upgradeSettings`                                                          | *models.UpgradeSettingsUnion*                                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | *models.WorkersSettingsUnion*                                              | :heavy_check_mark:                                                         | N/A                                                                        |