# PipelineFunctionSensitiveDataScanner

## Example Usage

```typescript
import { PipelineFunctionSensitiveDataScanner } from "cribl-control-plane/models";

let value: PipelineFunctionSensitiveDataScanner = {
  id: "sensitive_data_scanner",
  description:
    "mmm unwieldy honestly fraudster treasure cautious round however",
  disabled: false,
  final: true,
  conf: {
    rules: [
      {
        rulesetId: "<id>",
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Filter that selects data to be fed through this Function                                                 |
| `id`                                                                                                     | *"sensitive_data_scanner"*                                                                               | :heavy_check_mark:                                                                                       | Function ID                                                                                              |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Simple description of this step                                                                          |
| `disabled`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | If true, data will not be pushed through this function                                                   |
| `final`                                                                                                  | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | If enabled, stops the results of this Function from being passed to the downstream Functions             |
| `conf`                                                                                                   | [models.PipelineFunctionSensitiveDataScannerConf](../models/pipelinefunctionsensitivedatascannerconf.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `groupId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Group ID                                                                                                 |