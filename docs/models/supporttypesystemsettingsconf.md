# SupportTypeSystemSettingsConf

Support and diagnostics settings.

## Example Usage

```typescript
import { SupportTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: SupportTypeSystemSettingsConf = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `featureFlagOverrides`                                                                                       | [models.FeatureFlagOverrideConfSystemSettingsConf](../models/featureflagoverrideconfsystemsettingsconf.md)[] | :heavy_minus_sign:                                                                                           | List of feature flag overrides applied to this Cribl instance.                                               |
| `logFileMaxFiles`                                                                                            | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Maximum number of log files to retain before rotating.                                                       |
| `logFileMaxSize`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Maximum size of each log file. Value is a numeral and unit such as <code>10 MB</code>.                       |