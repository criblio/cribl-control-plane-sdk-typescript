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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `gid`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier for the group that owns the resource.                            |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | Unique identifier for the resource. Omitted for resource type <code>groups</code>. |
| `policy`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | String that defines the access control policy for the resource.                    |
| `type`                                                                             | [models.RbacResource](../models/rbacresource.md)                                   | :heavy_check_mark:                                                                 | N/A                                                                                |