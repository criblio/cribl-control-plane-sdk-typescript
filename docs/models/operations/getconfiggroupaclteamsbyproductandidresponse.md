# GetConfigGroupAclTeamsByProductAndIdResponse

a list of TeamAccessControlList objects

## Example Usage

```typescript
import { GetConfigGroupAclTeamsByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclTeamsByProductAndIdResponse = {
  count: 130404,
  items: [
    {
      perms: [],
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