# SystemSettingsConf

## Example Usage

```typescript
import { SystemSettingsConf } from "cribl-control-plane/models";

let value: SystemSettingsConf = {
  api: {
    disabled: true,
    host: "fixed-crocodile.name",
    port: 5454.97,
  },
  backups: {},
  pii: {},
  proxy: {
    useEnvVars: false,
  },
  rollback: {},
  shutdown: {
    drainTimeout: 5731.01,
  },
  sni: {},
  system: {
    intercom: true,
    upgrade: "false",
  },
  tls: {},
  upgradeGroupSettings: {},
  upgradeSettings: {},
  workers: {
    count: 6221.13,
    memory: 2914.29,
    minimum: 6135.82,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `api`                                                                                    | [models.ApiTypeSystemSettingsConf](../models/apitypesystemsettingsconf.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apps`                                                                                   | [models.AppsTypeSystemSettingsConf](../models/appstypesystemsettingsconf.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
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
| `upgradeGroupSettings`                                                                   | [models.UpgradeGroupSettings](../models/upgradegroupsettings.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `upgradeSettings`                                                                        | [models.UpgradeSettings](../models/upgradesettings.md)                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workers`                                                                                | [models.WorkersTypeSystemSettingsConf](../models/workerstypesystemsettingsconf.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |