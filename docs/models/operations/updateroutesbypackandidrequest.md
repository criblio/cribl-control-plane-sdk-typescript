# UpdateRoutesByPackAndIdRequest

## Example Usage

```typescript
import { UpdateRoutesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateRoutesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
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
| `pack`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Pack to update.                                                                               |
| `routes`                                                                                                                 | [models.Routes](../../models/routes.md)                                                                                  | :heavy_check_mark:                                                                                                       | Routes object                                                                                                            |