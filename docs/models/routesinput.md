# RoutesInput

## Example Usage

```typescript
import { RoutesInput } from "cribl-control-plane/models";

let value: RoutesInput = {
  routes: [
    {
      name: "<value>",
      pipeline: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | Routes ID                                                        |
| `routes`                                                         | [models.RoutesRouteInput](../models/routesrouteinput.md)[]       | :heavy_check_mark:                                               | Pipeline routing rules                                           |
| `groups`                                                         | Record<string, [models.RoutesGroups](../models/routesgroups.md)> | :heavy_minus_sign:                                               | N/A                                                              |
| `comments`                                                       | [models.Comment](../models/comment.md)[]                         | :heavy_minus_sign:                                               | Comments                                                         |