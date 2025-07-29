# GetGroupsAclByIdRequest

## Example Usage

```typescript
import { GetGroupsAclByIdRequest } from "cribl-control-plane/models/operations";

let value: GetGroupsAclByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Group id                                                                           |
| `type`                                                                             | [operations.GetGroupsAclByIdType](../../models/operations/getgroupsaclbyidtype.md) | :heavy_minus_sign:                                                                 | resource type by which to filter access levels                                     |