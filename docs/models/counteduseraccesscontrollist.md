# CountedUserAccessControlList

## Example Usage

```typescript
import { CountedUserAccessControlList } from "cribl-control-plane/models";

let value: CountedUserAccessControlList = {
  count: 818880,
  items: [
    {
      perms: [],
      user: "Ryder.Casper50",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.UserAccessControlList](../models/useraccesscontrollist.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |