# FunctionConfSchemaSidlookupField

## Example Usage

```typescript
import { FunctionConfSchemaSidlookupField } from "cribl-control-plane/models";

let value: FunctionConfSchemaSidlookupField = {
  name: "<value>",
  expr: "<value>",
  disabled: true,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `expr`                                                          | *string*                                                        | :heavy_check_mark:                                              | JavaScript expression to compute the value (can be constant)    |
| `disabled`                                                      | *boolean*                                                       | :heavy_minus_sign:                                              | Set to No to disable the evaluation of an individual expression |