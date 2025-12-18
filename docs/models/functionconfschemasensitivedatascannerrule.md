# FunctionConfSchemaSensitiveDataScannerRule

## Example Usage

```typescript
import { FunctionConfSchemaSensitiveDataScannerRule } from "cribl-control-plane/models";

let value: FunctionConfSchemaSensitiveDataScannerRule = {
  rulesetId: "<id>",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rulesetId`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | The ID of the ruleset to use for the scan                                                                                                                           |
| `replaceExpr`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | A JavaScript expression or literal to replace the matching content. Capturing groups can be referenced as g1, g2, and so on, and event fields as event.<fieldName>. |
| `disabled`                                                                                                                                                          | *boolean*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |