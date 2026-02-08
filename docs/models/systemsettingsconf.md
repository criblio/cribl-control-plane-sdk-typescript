# SystemSettingsConf

## Example Usage

```typescript
import { SystemSettingsConf } from "cribl-control-plane/models";

let value: SystemSettingsConf = {
  api: {
    disabled: false,
    host: "urban-handle.org",
    port: 4080.76,
  },
  backups: {},
  pii: {
    enablePiiDetection: false,
  },
  proxy: {
    useEnvVars: false,
  },
  rollback: {
    rollbackEnabled: true,
  },
  shutdown: {
    drainTimeout: 8257.32,
  },
  sni: {},
  system: {
    intercom: true,
    upgrade: "false",
  },
  tls: {
    defaultCipherList: "<value>",
    defaultEcdhCurve: "<value>",
    maxVersion: "<value>",
    minVersion: "<value>",
    rejectUnauthorized: true,
  },
  upgradeGroupSettings: {},
  upgradeSettings: {},
  workers: {
    count: 8060.34,
    memory: 307.32,
    minimum: 4954.24,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `api`                                                                                    | [models.ApiTypeSystemSettingsConf](../models/apitypesystemsettingsconf.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `backups`                                                                                | *models.BackupsSettingsUnion*                                                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customLogo`                                                                             | [models.CustomLogoTypeSystemSettingsConf](../models/customlogotypesystemsettingsconf.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `pii`                                                                                    | *models.PiiSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `proxy`                                                                                  | [models.ProxyTypeSystemSettingsConf](../models/proxytypesystemsettingsconf.md)           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rollback`                                                                               | *models.RollbackSettingsUnion*                                                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `shutdown`                                                                               | [models.ShutdownTypeSystemSettingsConf](../models/shutdowntypesystemsettingsconf.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `sni`                                                                                    | *models.SniSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `sockets`                                                                                | [models.SocketsTypeSystemSettingsConf](../models/socketstypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `support`                                                                                | [models.SupportTypeSystemSettingsConf](../models/supporttypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `system`                                                                                 | [models.SystemTypeSystemSettingsConf](../models/systemtypesystemsettingsconf.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tls`                                                                                    | *models.TlsSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `upgradeGroupSettings`                                                                   | *models.UpgradeGroupSettingsUnion*                                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `upgradeSettings`                                                                        | [models.UpgradeSettings](../models/upgradesettings.md)                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workers`                                                                                | [models.WorkersTypeSystemSettingsConf](../models/workerstypesystemsettingsconf.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |