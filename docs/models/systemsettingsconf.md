# SystemSettingsConf

## Example Usage

```typescript
import { SystemSettingsConf } from "cribl-control-plane/models";

let value: SystemSettingsConf = {
  api: {
    disabled: false,
    host: "urban-handle.org",
    port: 408076,
  },
  backups: {},
  pii: {},
  proxy: {
    useEnvVars: false,
  },
  rollback: {},
  shutdown: {
    drainTimeout: 32091,
  },
  sni: {},
  system: {
    intercom: false,
    upgrade: "false",
  },
  tls: {},
  upgradeGroupSettings: {},
  upgradeSettings: {},
  workers: {
    count: 371936,
    memory: 155133,
    minimum: 825732,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `api`                                                                                    | [models.ApiTypeSystemSettingsConf](../models/apitypesystemsettingsconf.md)               | :heavy_check_mark:                                                                       | API server configuration for the Cribl instance.                                         |
| `apps`                                                                                   | [models.AppsTypeSystemSettingsConf](../models/appstypesystemsettingsconf.md)             | :heavy_minus_sign:                                                                       | App configuration.                                                                       |
| `backups`                                                                                | *models.BackupsSettingsUnion*                                                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customLogo`                                                                             | [models.CustomLogoTypeSystemSettingsConf](../models/customlogotypesystemsettingsconf.md) | :heavy_minus_sign:                                                                       | Custom logo configuration for the Cribl UI login page and navigation bar.                |
| `pii`                                                                                    | *models.PiiSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `proxy`                                                                                  | [models.ProxyTypeSystemSettingsConf](../models/proxytypesystemsettingsconf.md)           | :heavy_check_mark:                                                                       | HTTP proxy configuration for outbound connections.                                       |
| `rollback`                                                                               | *models.RollbackSettingsUnion*                                                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `shutdown`                                                                               | [models.ShutdownTypeSystemSettingsConf](../models/shutdowntypesystemsettingsconf.md)     | :heavy_check_mark:                                                                       | Graceful shutdown configuration.                                                         |
| `sni`                                                                                    | *models.SniSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `sockets`                                                                                | [models.SocketsTypeSystemSettingsConf](../models/socketstypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | Unix domain socket configuration.                                                        |
| `support`                                                                                | [models.SupportTypeSystemSettingsConf](../models/supporttypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | Support and diagnostics settings.                                                        |
| `system`                                                                                 | [models.SystemTypeSystemSettingsConf](../models/systemtypesystemsettingsconf.md)         | :heavy_check_mark:                                                                       | System-level operational settings for the Cribl instance.                                |
| `tls`                                                                                    | *models.TlsSettingsUnion*                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `upgradeGroupSettings`                                                                   | [models.UpgradeGroupSettings](../models/upgradegroupsettings.md)                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `upgradeSettings`                                                                        | [models.UpgradeSettings](../models/upgradesettings.md)                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workers`                                                                                | [models.WorkersTypeSystemSettingsConf](../models/workerstypesystemsettingsconf.md)       | :heavy_check_mark:                                                                       | Worker Process configuration.                                                            |