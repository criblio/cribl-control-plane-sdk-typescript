# CountedListTeamAccessControlList

## Example Usage

```typescript
import { CountedListTeamAccessControlList } from "cribl-control-plane/models";

let value: CountedListTeamAccessControlList = {
  count: 317838,
  items: [
    {
      perms: [
        {
          gid: "<id>",
          id: "<id>",
          policy: "<value>",
          type: "dataset-providers",
        },
      ],
      team: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.TeamAccessControlList](../models/teamaccesscontrollist.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |