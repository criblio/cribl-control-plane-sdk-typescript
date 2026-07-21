# PipelineFunctionSensitiveDataScannerFlag

## Example Usage

```typescript
import { PipelineFunctionSensitiveDataScannerFlag } from "cribl-control-plane/models";

let value: PipelineFunctionSensitiveDataScannerFlag = {
  value: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | Name of the field to set when one or more scanning rules match.     |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | JavaScript expression to compute the value to assign to this field. |