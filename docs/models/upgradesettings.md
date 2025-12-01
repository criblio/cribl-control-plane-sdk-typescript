# UpgradeSettings

## Example Usage

```typescript
import { UpgradeSettings } from "cribl-control-plane/models";

let value: UpgradeSettings = {
  automaticUpgradeCheckPeriod: "<value>",
  disableAutomaticUpgrade: true,
  enableLegacyEdgeUpgrade: false,
  packageUrls: [
    {
      packageHashUrl: "https://best-import.com/",
      packageUrl: "https://appropriate-responsibility.net/",
    },
  ],
  upgradeSource: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `automaticUpgradeCheckPeriod`                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `disableAutomaticUpgrade`                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `enableLegacyEdgeUpgrade`                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `packageUrls`                                                  | [models.UpgradePackageUrls](../models/upgradepackageurls.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `upgradeSource`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |