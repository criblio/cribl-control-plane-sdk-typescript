# SystemTypeSystemSettingsConf

System-level operational settings for the Cribl instance.

## Example Usage

```typescript
import { SystemTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: SystemTypeSystemSettingsConf = {
  intercom: false,
  upgrade: "api",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `intercom`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | If <code>true</code>, enable Intercom integration for in-product messaging. Otherwise, <code>false</code>.         |
| `upgrade`                                                                                                          | [models.UpgradeOptionsSystemSettingsConfSystem](../models/upgradeoptionssystemsettingsconfsystem.md)               | :heavy_check_mark:                                                                                                 | Upgrade permission policy: <code>api</code> to allow upgrades from the UI or API or <code>false</code> to disable. |