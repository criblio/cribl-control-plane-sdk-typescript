# FunctionConfSchemaEvalAdd

## Example Usage

```typescript
import { FunctionConfSchemaEvalAdd } from "cribl-control-plane/models";

let value: FunctionConfSchemaEvalAdd = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `value`                                                         | *string*                                                        | :heavy_check_mark:                                              | JavaScript expression to compute the value (can be constant)    |
| `disabled`                                                      | *boolean*                                                       | :heavy_minus_sign:                                              | Set to No to disable the evaluation of an individual expression |