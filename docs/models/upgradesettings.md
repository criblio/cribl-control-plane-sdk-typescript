# UpgradeSettings

## Example Usage

```typescript
import { UpgradeSettings } from "cribl-control-plane/models";

let value: UpgradeSettings = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `automaticUpgradeCheckPeriod`                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | How frequently to check for available upgrades. Value is a duration string such as <code>24h</code>.            |
| `disableAutomaticUpgrade`                                                                                       | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | If <code>true</code>, automatic upgrades are disabled. Otherwise, <code>false</code>.                           |
| `enableLegacyEdgeUpgrade`                                                                                       | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | If <code>true</code>, enable the legacy upgrade flow for Edge Nodes. Otherwise, <code>false</code>.             |
| `packageUrls`                                                                                                   | [models.UpgradePackageUrls](../models/upgradepackageurls.md)[]                                                  | :heavy_minus_sign:                                                                                              | List of custom package URLs to use for manual upgrades.                                                         |
| `upgradeSource`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Upgrade source: <code>cribl</code> for official Cribl packages or <code>custom</code> for a custom package URL. |