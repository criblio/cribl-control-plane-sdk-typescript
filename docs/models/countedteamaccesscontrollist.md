# CountedTeamAccessControlList

## Example Usage

```typescript
import { CountedTeamAccessControlList } from "cribl-control-plane/models";

let value: CountedTeamAccessControlList = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.TeamAccessControlList](../models/teamaccesscontrollist.md)[] | :heavy_minus_sign:                                                   | List of items in this response.                                      |