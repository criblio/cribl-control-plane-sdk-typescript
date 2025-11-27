# FunctionSensitiveDataScannerConf

## Example Usage

```typescript
import { FunctionSensitiveDataScannerConf } from "cribl-control-plane/models";

let value: FunctionSensitiveDataScannerConf = {
  rules: [],
  fields: [
    "<value 1>",
  ],
  excludeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  flags: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                                         | [models.FunctionSensitiveDataScannerRule](../models/functionsensitivedatascannerrule.md)[]                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `fields`                                                                                                                        | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Rulesets act on the events contained in these fields. Mitigation expressions apply to the scan results. Supports wildcards (*). |
| `excludeFields`                                                                                                                 | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Fields that the mitigation expression will not be applied to. Supports wildcards (*).                                           |
| `flags`                                                                                                                         | [models.FunctionSensitiveDataScannerFlag](../models/functionsensitivedatascannerflag.md)[]                                      | :heavy_minus_sign:                                                                                                              | Fields to add when mitigation is applied to an event                                                                            |
| `includeDetectedRules`                                                                                                          | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | If enabled, Add matching ruleset IDs to a field called "__detected"                                                             |