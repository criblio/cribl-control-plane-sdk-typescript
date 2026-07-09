# SystemSettingsConfUpdate

## Example Usage

```typescript
import { SystemSettingsConfUpdate } from "cribl-control-plane/models";

let value: SystemSettingsConfUpdate = {
  backups: {},
  pii: {},
  rollback: {},
  sni: {},
  tls: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `api`                                                                                    | [models.ApiTypeSystemSettingsConf](../models/apitypesystemsettingsconf.md)               | :heavy_minus_sign:                                                                       | API server configuration for the Cribl instance.                                         |
| `apps`                                                                                   | [models.AppsTypeSystemSettingsConf](../models/appstypesystemsettingsconf.md)             | :heavy_minus_sign:                                                                       | App configuration.                                                                       |
| `backups`                                                                                | *models.BackupsSettingsUnion*                                                            | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customLogo`                                                                             | [models.CustomLogoTypeSystemSettingsConf](../models/customlogotypesystemsettingsconf.md) | :heavy_minus_sign:                                                                       | Custom logo configuration for the Cribl UI login page and navigation bar.                |
| `pii`                                                                                    | *models.PiiSettingsUnion*                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `proxy`                                                                                  | [models.ProxyTypeSystemSettingsConf](../models/proxytypesystemsettingsconf.md)           | :heavy_minus_sign:                                                                       | HTTP proxy configuration for outbound connections.                                       |
| `rollback`                                                                               | *models.RollbackSettingsUnion*                                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `shutdown`                                                                               | [models.ShutdownTypeSystemSettingsConf](../models/shutdowntypesystemsettingsconf.md)     | :heavy_minus_sign:                                                                       | Graceful shutdown configuration.                                                         |
| `sni`                                                                                    | *models.SniSettingsUnion*                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sockets`                                                                                | [models.SocketsTypeSystemSettingsConf](../models/socketstypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | Unix domain socket configuration.                                                        |
| `support`                                                                                | [models.SupportTypeSystemSettingsConf](../models/supporttypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | Support and diagnostics settings.                                                        |
| `system`                                                                                 | [models.SystemTypeSystemSettingsConf](../models/systemtypesystemsettingsconf.md)         | :heavy_minus_sign:                                                                       | System-level operational settings for the Cribl instance.                                |
| `tls`                                                                                    | *models.TlsSettingsUnion*                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `upgradeGroupSettings`                                                                   | [models.UpgradeGroupSettings](../models/upgradegroupsettings.md)                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `upgradeSettings`                                                                        | [models.UpgradeSettings](../models/upgradesettings.md)                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `workers`                                                                                | [models.WorkersTypeSystemSettingsConf](../models/workerstypesystemsettingsconf.md)       | :heavy_minus_sign:                                                                       | Worker Process configuration.                                                            |