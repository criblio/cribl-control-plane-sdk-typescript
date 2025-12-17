# PipelineFunctionSensitiveDataScannerConf

## Example Usage

```typescript
import { PipelineFunctionSensitiveDataScannerConf } from "cribl-control-plane/models";

let value: PipelineFunctionSensitiveDataScannerConf = {
  rules: [
    {
      rulesetId: "<id>",
    },
  ],
  fields: [
    "<value 1>",
    "<value 2>",
  ],
  excludeFields: [
    "<value 1>",
    "<value 2>",
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
| `rules`                                                                                                                         | [models.PipelineFunctionSensitiveDataScannerRule](../models/pipelinefunctionsensitivedatascannerrule.md)[]                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `fields`                                                                                                                        | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Rulesets act on the events contained in these fields. Mitigation expressions apply to the scan results. Supports wildcards (*). |
| `excludeFields`                                                                                                                 | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | Fields that the mitigation expression will not be applied to. Supports wildcards (*).                                           |
| `flags`                                                                                                                         | [models.PipelineFunctionSensitiveDataScannerFlag](../models/pipelinefunctionsensitivedatascannerflag.md)[]                      | :heavy_minus_sign:                                                                                                              | Fields to add when mitigation is applied to an event                                                                            |
| `includeDetectedRules`                                                                                                          | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | If enabled, Add matching ruleset IDs to a field called "__detected"                                                             |