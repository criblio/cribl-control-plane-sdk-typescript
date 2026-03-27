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
        final: true,
        id: "<id>",
        name: "<value>",
        pipeline: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Routing table that contains the Route to update. The supported value is <code>default</code>. |
| `routes`                                                                                                                 | [models.Routes](../../models/routes.md)                                                                                  | :heavy_check_mark:                                                                                                       | Routes object                                                                                                            |