# GetProductsGroupsAclTeamsByProductAndIdResponse

a list of TeamAccessControlList objects

## Example Usage

```typescript
import { GetProductsGroupsAclTeamsByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsAclTeamsByProductAndIdResponse = {
  count: 273098,
  items: [
    {
      perms: [
        {
          gid: "<id>",
          id: "<id>",
          policy: "<value>",
          type: "dashboards",
        },
      ],
      team: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `count`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | number of items present in the items array                              |
| `items`                                                                 | [models.TeamAccessControlList](../../models/teamaccesscontrollist.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |