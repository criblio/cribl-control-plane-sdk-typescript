# UpdateRoutesByIdRequest

## Example Usage

```typescript
import { UpdateRoutesByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateRoutesByIdRequest = {
  id: "<id>",
  routes: {
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
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Unique ID to PATCH                                |
| `routes`                                          | [models.RoutesInput](../../models/routesinput.md) | :heavy_check_mark:                                | Routes object to be updated                       |