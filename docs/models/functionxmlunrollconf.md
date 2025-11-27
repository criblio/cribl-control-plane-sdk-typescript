# FunctionXmlUnrollConf

## Example Usage

```typescript
import { FunctionXmlUnrollConf } from "cribl-control-plane/models";

let value: FunctionXmlUnrollConf = {
  unroll: "<value>",
  inherit: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `unroll`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | Path to array to unroll. Example: ^root\.child\.ElementToUnroll$                                  |
| `inherit`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | Regex matching elements to copy into each unrolled event. Example: ^root\.(childA\|childB\|childC)$ |
| `unrollIdxField`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | Add a field with this name, containing the index at which the item was located, starting from 0   |
| `pretty`                                                                                          | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Pretty print the output XML                                                                       |