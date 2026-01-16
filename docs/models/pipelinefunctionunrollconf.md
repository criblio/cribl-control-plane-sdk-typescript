# PipelineFunctionUnrollConf

## Example Usage

```typescript
import { PipelineFunctionUnrollConf } from "cribl-control-plane/models";

let value: PipelineFunctionUnrollConf = {
  srcExpr: "<value>",
  dstField: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `srcExpr`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Field in which to find/calculate the array to unroll. Example: _raw, _raw.split(/\n/) |
| `dstField`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | Field in destination event in which to place the unrolled value                       |