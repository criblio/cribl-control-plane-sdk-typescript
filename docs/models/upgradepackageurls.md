# UpgradePackageUrls

## Example Usage

```typescript
import { UpgradePackageUrls } from "cribl-control-plane/models";

let value: UpgradePackageUrls = {
  packageUrl: "https://total-redesign.org/",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `packageHashUrl`                                          | *string*                                                  | :heavy_minus_sign:                                        | URL of the hash file used to verify the package download. |
| `packageUrl`                                              | *string*                                                  | :heavy_check_mark:                                        | URL of the upgrade package file.                          |