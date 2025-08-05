# GetGroupsAclByIdResponse

a list of UserAccessControlList objects

## Example Usage

```typescript
import { GetGroupsAclByIdResponse } from "cribl-control-plane/models/operations";

let value: GetGroupsAclByIdResponse = {
  count: 273059,
  items: [
    {
      perms: [],
      user: "Carrie.Nienow35",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `count`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | number of items present in the items array                              |
| `items`                                                                 | [models.UserAccessControlList](../../models/useraccesscontrollist.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |