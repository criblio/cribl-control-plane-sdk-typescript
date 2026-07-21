# PipelineFunctionMaskFlag

## Example Usage

```typescript
import { PipelineFunctionMaskFlag } from "cribl-control-plane/models";

let value: PipelineFunctionMaskFlag = {
  value: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the field to set when one or more masking rules match. |
| `value`                                                        | *string*                                                       | :heavy_check_mark:                                             | JavaScript expression to compute the value (can be constant)   |