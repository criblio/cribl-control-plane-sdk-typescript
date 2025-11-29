# UpgradeSettings1

## Example Usage

```typescript
import { UpgradeSettings1 } from "cribl-control-plane/models";

let value: UpgradeSettings1 = {
  automaticUpgradeCheckPeriod: "<value>",
  disableAutomaticUpgrade: false,
  enableLegacyEdgeUpgrade: false,
  packageUrls: [
    {
      packageHashUrl: "https://strict-alliance.info/",
      packageUrl: "https://cuddly-bathhouse.info",
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