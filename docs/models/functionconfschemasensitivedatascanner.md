# FunctionConfSchemaSensitiveDataScanner

## Example Usage

```typescript
import { FunctionConfSchemaSensitiveDataScanner } from "cribl-control-plane/models";

let value: FunctionConfSchemaSensitiveDataScanner = {
  rules: [
    {
      rulesetId: "<id>",
      replaceExpr: "<value>",
      disabled: true,
    },
  ],
  fields: [
    "<value 1>",
    "<value 2>",
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
  includeDetectedRules: true,
  backgroundDetection: true,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                                         | [models.FunctionConfSchemaSensitiveDataScannerRule](../models/functionconfschemasensitivedatascannerrule.md)[]                  | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `fields`                                                                                                                        | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Rulesets act on the events contained in these fields. Mitigation expressions apply to the scan results. Supports wildcards (*). |
| `excludeFields`                                                                                                                 | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Fields that the mitigation expression will not be applied to. Supports wildcards (*).                                           |
| `flags`                                                                                                                         | [models.FunctionConfSchemaSensitiveDataScannerFlag](../models/functionconfschemasensitivedatascannerflag.md)[]                  | :heavy_minus_sign:                                                                                                              | Fields to add when mitigation is applied to an event                                                                            |
| `includeDetectedRules`                                                                                                          | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Add matching ruleset IDs to a field called "__detected"                                                                         |
| `backgroundDetection`                                                                                                           | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |