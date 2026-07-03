# FeatureFlagOverrideConfSystemSettingsConf

## Example Usage

```typescript
import { FeatureFlagOverrideConfSystemSettingsConf } from "cribl-control-plane/models";

let value: FeatureFlagOverrideConfSystemSettingsConf = {
  disabled: false,
  flagId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `disabled`                                                                         | *boolean*                                                                          | :heavy_check_mark:                                                                 | If <code>true</code>, the feature flag is disabled. Otherwise, <code>false</code>. |
| `flagId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier of the feature flag to override.                                 |