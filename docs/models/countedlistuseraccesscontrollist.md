# CountedListUserAccessControlList

## Example Usage

```typescript
import { CountedListUserAccessControlList } from "cribl-control-plane/models";

let value: CountedListUserAccessControlList = {
  count: 412133,
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
      user: "Ashton.Kovacek39",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.UserAccessControlList](../models/useraccesscontrollist.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |