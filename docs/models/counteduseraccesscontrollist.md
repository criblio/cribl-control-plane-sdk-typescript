# CountedUserAccessControlList

## Example Usage

```typescript
import { CountedUserAccessControlList } from "cribl-control-plane/models";

let value: CountedUserAccessControlList = {
  count: 818880,
  items: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.UserAccessControlList](../models/useraccesscontrollist.md)[] | :heavy_check_mark:                                                   | List of items in this response.                                      |