# SystemSettingsSupport

## Example Usage

```typescript
import { SystemSettingsSupport } from "cribl-control-plane/models";

let value: SystemSettingsSupport = {
  featureFlagOverrides: [
    {
      disabled: false,
      flagId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `featureFlagOverrides`                                                                       | [models.SystemSettingsFeatureFlagOverride](../models/systemsettingsfeatureflagoverride.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |