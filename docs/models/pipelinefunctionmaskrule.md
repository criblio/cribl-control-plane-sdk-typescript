# PipelineFunctionMaskRule

## Example Usage

```typescript
import { PipelineFunctionMaskRule } from "cribl-control-plane/models";

let value: PipelineFunctionMaskRule = {
  matchRegex: "<value>",
  replaceExpr: "<value>",
  disabled: false,
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `matchRegex`                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Pattern to replace. Use /g to replace all matches.                                                                                                                  |
| `replaceExpr`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | A JavaScript expression or literal to replace the matching content. Capturing groups can be referenced as g1, g2, and so on, and event fields as event.<fieldName>. |
| `disabled`                                                                                                                                                          | *boolean*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                  | Set to No to disable the evaluation of an individual rule                                                                                                           |