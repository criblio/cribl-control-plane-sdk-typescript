# SystemSettingsConfSupport

## Example Usage

```typescript
import { SystemSettingsConfSupport } from "cribl-control-plane/models";

let value: SystemSettingsConfSupport = {
  featureFlagOverrides: [
    {
      disabled: true,
      flagId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `featureFlagOverrides`                                                                               | [models.SystemSettingsConfFeatureFlagOverride](../models/systemsettingsconffeatureflagoverride.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |