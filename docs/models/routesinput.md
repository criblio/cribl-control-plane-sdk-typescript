# RoutesInput

## Example Usage

```typescript
import { RoutesInput } from "cribl-control-plane/models";

let value: RoutesInput = {
  id: "<id>",
  routes: [
    {
      name: "<value>",
      disabled: false,
      pipeline: "<value>",
      output: "<value>",
      outputExpression: "<value>",
      description: "symbolise ack brr babyish congregate save supposing",
    },
  ],
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
| `routes`                                                         | [models.RoutesRouteInput](../models/routesrouteinput.md)[]       | :heavy_check_mark:                                               | Pipeline routing rules                                           |
| `groups`                                                         | Record<string, [models.RoutesGroups](../models/routesgroups.md)> | :heavy_minus_sign:                                               | N/A                                                              |
| `comments`                                                       | [models.Comment](../models/comment.md)[]                         | :heavy_minus_sign:                                               | Comments                                                         |