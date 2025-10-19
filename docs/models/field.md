# Field

## Example Usage

```typescript
import { Field } from "cribl-control-plane/models";

let value: Field = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `value`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | The JavaScript expression used to compute the field's value (can be constant) |