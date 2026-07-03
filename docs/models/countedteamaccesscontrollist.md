# CountedTeamAccessControlList

## Example Usage

```typescript
import { CountedTeamAccessControlList } from "cribl-control-plane/models";

let value: CountedTeamAccessControlList = {
  count: 484825,
  items: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.TeamAccessControlList](../models/teamaccesscontrollist.md)[] | :heavy_check_mark:                                                   | List of items in this response.                                      |