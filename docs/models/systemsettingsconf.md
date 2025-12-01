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
  customLogo: {
    enabled: true,
    logoDescription: "<value>",
    logoImage: "<value>",
  },
  pii: {},
  proxy: {
    useEnvVars: true,
  },
  rollback: {
    rollbackEnabled: true,
    rollbackRetries: 3163.15,
    rollbackTimeout: 6964.89,
  },
  shutdown: {
    drainTimeout: 8496.74,
  },
  sni: {},
  sockets: {
    directory: "/usr/libdata",
  },
  support: {
    featureFlagOverrides: [
      {
        disabled: false,
        flagId: "<id>",
      },
    ],
  },
  system: {
    intercom: true,
    upgrade: "api",
  },
  tls: {
    defaultCipherList: "<value>",
    defaultEcdhCurve: "<value>",
    maxVersion: "<value>",
    minVersion: "<value>",
    rejectUnauthorized: true,
  },
  upgradeGroupSettings: {},
  upgradeSettings: {
    automaticUpgradeCheckPeriod: "<value>",
    disableAutomaticUpgrade: false,
    enableLegacyEdgeUpgrade: false,
    packageUrls: [
      {
        packageHashUrl: "https://best-import.com/",
        packageUrl: "https://appropriate-responsibility.net/",
      },
    ],
    upgradeSource: "<value>",
  },
  workers: {
    count: 1817.1,
    enableHeapSnapshots: false,
    loadThrottlePerc: 4246.78,
    memory: 4433.58,
    minimum: 2178.79,
    startupMaxConns: 3611.13,
    startupThrottleTimeout: 2818.79,
    v8SingleThread: true,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `api`                                                                      | [models.Api](../models/api.md)                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `backups`                                                                  | *models.BackupsSettingsUnion*                                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `customLogo`                                                               | [models.CustomLogo](../models/customlogo.md)                               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `pii`                                                                      | *models.PiiSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `proxy`                                                                    | [models.Proxy](../models/proxy.md)                                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `rollback`                                                                 | *models.RollbackSettingsUnion*                                             | :heavy_check_mark:                                                         | N/A                                                                        |
| `shutdown`                                                                 | [models.Shutdown](../models/shutdown.md)                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sni`                                                                      | *models.SniSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `sockets`                                                                  | [models.Sockets](../models/sockets.md)                                     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `support`                                                                  | [models.Support](../models/support.md)                                     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `system`                                                                   | [models.SystemSettingsConfSystem](../models/systemsettingsconfsystem.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `tls`                                                                      | *models.TlsSettingsUnion*                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `upgradeGroupSettings`                                                     | *models.UpgradeGroupSettingsUnion*                                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `upgradeSettings`                                                          | [models.UpgradeSettings](../models/upgradesettings.md)                     | :heavy_check_mark:                                                         | N/A                                                                        |
| `workers`                                                                  | [models.SystemSettingsConfWorkers](../models/systemsettingsconfworkers.md) | :heavy_check_mark:                                                         | N/A                                                                        |