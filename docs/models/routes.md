# Routes

## Example Usage

```typescript
import { Routes } from "cribl-control-plane/models";

let value: Routes = {
  comments: [
    {
      comment:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      groupId: "<id>",
      id: "<id>",
      index: 9969.55,
    },
  ],
  groups: {
    "key": {
      description:
        "since armchair thoroughly mmm miserably basket ugh rectangular",
      index: 5527.34,
      name: "<value>",
    },
  },
  id: "<id>",
  routes: [],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `comments`                                                       | [models.RouteComment](../models/routecomment.md)[]               | :heavy_minus_sign:                                               | Comments.                                                        |
| `groups`                                                         | Record<string, [models.RoutesGroups](../models/routesgroups.md)> | :heavy_minus_sign:                                               | Map of route groups.                                             |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Routes ID.                                                       |
| `routes`                                                         | [models.RouteConf](../models/routeconf.md)[]                     | :heavy_check_mark:                                               | Pipeline routing rules.                                          |