# FunctionConfSchemaUnroll

## Example Usage

```typescript
import { FunctionConfSchemaUnroll } from "cribl-control-plane/models";

let value: FunctionConfSchemaUnroll = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `srcExpr`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | Field in which to find/calculate the array to unroll. Example: _raw, _raw.split(/\n/) |
| `dstField`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | Field in destination event in which to place the unrolled value                       |