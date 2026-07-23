# CustomLogoTypeSystemSettingsConf

Custom logo configuration for the Cribl UI login page and navigation bar.

## Example Usage

```typescript
import { CustomLogoTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: CustomLogoTypeSystemSettingsConf = {
  enabled: true,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `enabled`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | If <code>true</code>, display the custom logo in the UI. Otherwise, <code>false</code>. |
| `logoDescription`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | Description text displayed alongside the custom logo.                                   |
| `logoImage`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Custom logo image as a base64-encoded data URI (PNG or JPEG, maximum 2 MB).             |