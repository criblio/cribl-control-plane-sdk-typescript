# SupportTypeSystemSettingsConf

## Example Usage

```typescript
import { SupportTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: SupportTypeSystemSettingsConf = {
  featureFlagOverrides: [
    {
      disabled: false,
      flagId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `featureFlagOverrides`                                                                                                                 | [models.ItemsTypeSystemSettingsConfSupportFeatureFlagOverrides](../models/itemstypesystemsettingsconfsupportfeatureflagoverrides.md)[] | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |