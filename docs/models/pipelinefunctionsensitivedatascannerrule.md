# PipelineFunctionSensitiveDataScannerRule

## Example Usage

```typescript
import { PipelineFunctionSensitiveDataScannerRule } from "cribl-control-plane/models";

let value: PipelineFunctionSensitiveDataScannerRule = {
  rulesetId: "<id>",
  replaceExpr: "<value>",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rulesetId`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | The ID of the ruleset to use for the scan                                                                                                                           |
| `replaceExpr`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | A JavaScript expression or literal to replace the matching content. Capturing groups can be referenced as g1, g2, and so on, and event fields as event.<fieldName>. |
| `disabled`                                                                                                                                                          | *boolean*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |