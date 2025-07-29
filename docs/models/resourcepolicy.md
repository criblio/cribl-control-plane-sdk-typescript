# ResourcePolicy

## Example Usage

```typescript
import { ResourcePolicy } from "cribl-control-plane/models";

let value: ResourcePolicy = {
  gid: "<id>",
  policy: "<value>",
  type: "macros",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `gid`                                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `policy`                                         | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `type`                                           | [models.RbacResource](../models/rbacresource.md) | :heavy_check_mark:                               | N/A                                              |