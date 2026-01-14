# CustomLabel

## Example Usage

```typescript
import { CustomLabel } from "cribl-control-plane/models/operations";

let value: CustomLabel = {
  key: "<key>",
  value: "<value>",
  rbacEnabled: true,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `key`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `value`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rbacEnabled`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | Designate this label for role-based access control and filtering |