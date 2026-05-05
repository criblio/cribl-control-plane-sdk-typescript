# UpdateRoutesByPackAndIdRequest

## Example Usage

```typescript
import { UpdateRoutesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateRoutesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  routesInput: {
    id: "<id>",
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Routing table that contains the Route to update. The supported value is <code>default</code>. |
| `pack`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Pack.                                                                                         |
| `routesInput`                                                                                                            | [models.RoutesInput](../../models/routesinput.md)                                                                        | :heavy_check_mark:                                                                                                       | RoutesInput object                                                                                                       |