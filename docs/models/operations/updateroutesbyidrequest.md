# UpdateRoutesByIdRequest

## Example Usage

```typescript
import { UpdateRoutesByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateRoutesByIdRequest = {
  id: "<id>",
  routes: {
    routes: [
      {
        name: "<value>",
        pipeline: "<value>",
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