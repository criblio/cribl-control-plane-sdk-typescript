# CustomLabelChronicle

## Example Usage

```typescript
import { CustomLabelChronicle } from "cribl-control-plane/models";

let value: CustomLabelChronicle = {
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `key`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `value`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rbacEnabled`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | Designate this label for role-based access control and filtering |