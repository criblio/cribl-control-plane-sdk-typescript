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
  backups: {
    backupPersistence: "<value>",
    backupsDirectory: "<value>",
  },
  customLogo: {
    enabled: true,
    logoDescription: "<value>",
    logoImage: "<value>",
  },
  pii: {
    enablePiiDetection: true,
  },
  proxy: {
    useEnvVars: true,
  },
  rollback: {
    rollbackEnabled: true,
    rollbackRetries: 443.59,
    rollbackTimeout: 2742.51,
  },
  shutdown: {
    drainTimeout: 732.91,
  },
  sni: {
    disableSNIRouting: true,
  },
  sockets: {
    directory: "/usr/X11R6",
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
    rejectUnauthorized: false,
  },
  upgradeGroupSettings: {
    isRolling: false,
    quantity: 4087.94,
    retryCount: 6166.12,
    retryDelay: 17.98,
  },
  upgradeSettings: {
    automaticUpgradeCheckPeriod: "<value>",
    disableAutomaticUpgrade: true,
    enableLegacyEdgeUpgrade: true,
    packageUrls: [
      {
        packageHashUrl: "https://utilized-equal.org",
        packageUrl: "https://raw-bidet.com",
      },
    ],
    upgradeSource: "<value>",
  },
  workers: {
    count: 4564.1,
    enableHeapSnapshots: true,
    loadThrottlePerc: 223.14,
    memory: 390.13,
    minimum: 7544.74,
    startupMaxConns: 8006.89,
    startupThrottleTimeout: 1817.1,
    v8SingleThread: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `api`                                                                            | [models.SystemSettingsConfApi](../models/systemsettingsconfapi.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `backups`                                                                        | [models.SystemSettingsConfBackups](../models/systemsettingsconfbackups.md)       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `customLogo`                                                                     | [models.SystemSettingsConfCustomLogo](../models/systemsettingsconfcustomlogo.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pii`                                                                            | [models.SystemSettingsConfPii](../models/systemsettingsconfpii.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `proxy`                                                                          | [models.SystemSettingsConfProxy](../models/systemsettingsconfproxy.md)           | :heavy_check_mark:                                                               | N/A                                                                              |
| `rollback`                                                                       | [models.SystemSettingsConfRollback](../models/systemsettingsconfrollback.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `shutdown`                                                                       | [models.SystemSettingsConfShutdown](../models/systemsettingsconfshutdown.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `sni`                                                                            | [models.SystemSettingsConfSni](../models/systemsettingsconfsni.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |
| `sockets`                                                                        | [models.SystemSettingsConfSockets](../models/systemsettingsconfsockets.md)       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `support`                                                                        | [models.SystemSettingsConfSupport](../models/systemsettingsconfsupport.md)       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `system`                                                                         | [models.SystemSettingsConfSystem](../models/systemsettingsconfsystem.md)         | :heavy_check_mark:                                                               | N/A                                                                              |
| `tls`                                                                            | [models.SystemSettingsConfTls](../models/systemsettingsconftls.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |
| `upgradeGroupSettings`                                                           | [models.UpgradeGroupSettings](../models/upgradegroupsettings.md)                 | :heavy_check_mark:                                                               | N/A                                                                              |
| `upgradeSettings`                                                                | [models.UpgradeSettings](../models/upgradesettings.md)                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workers`                                                                        | [models.SystemSettingsConfWorkers](../models/systemsettingsconfworkers.md)       | :heavy_check_mark:                                                               | N/A                                                                              |