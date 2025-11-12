# Routes

## Example Usage

```typescript
import { Routes } from "cribl-control-plane/models";

let value: Routes = {
  id: "<id>",
  routes: [],
  groups: {
    "key": {
      name: "<value>",
      description:
        "efface aw bonfire promptly carefully really versus wisely annually alienated",
      disabled: true,
    },
  },
  comments: [
    {
      comment:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | Routes ID                                                        |
| `routes`                                                         | [models.RoutesRoute](../models/routesroute.md)[]                 | :heavy_check_mark:                                               | Pipeline routing rules                                           |
| `groups`                                                         | Record<string, [models.RoutesGroups](../models/routesgroups.md)> | :heavy_minus_sign:                                               | N/A                                                              |
| `comments`                                                       | [models.Comment](../models/comment.md)[]                         | :heavy_minus_sign:                                               | Comments                                                         |