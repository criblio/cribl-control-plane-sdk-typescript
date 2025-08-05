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
      description: "athwart joshingly whether inspection how highly",
      disabled: false,
    },
  },
  comments: [
    {
      comment:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
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