# GetConfigGroupAclByProductAndIdResponse

a list of UserAccessControlList objects

## Example Usage

```typescript
import { GetConfigGroupAclByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclByProductAndIdResponse = {
  count: 259091,
  items: [
    {
      perms: [],
      user: "Christy28",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `count`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | number of items present in the items array                              |
| `items`                                                                 | [models.UserAccessControlList](../../models/useraccesscontrollist.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |