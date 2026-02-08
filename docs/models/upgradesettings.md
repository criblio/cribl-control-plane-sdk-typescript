# UpgradeSettings

## Example Usage

```typescript
import { UpgradeSettings } from "cribl-control-plane/models";

let value: UpgradeSettings = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `automaticUpgradeCheckPeriod`                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `disableAutomaticUpgrade`                                      | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `enableLegacyEdgeUpgrade`                                      | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `packageUrls`                                                  | [models.UpgradePackageUrls](../models/upgradepackageurls.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `upgradeSource`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |