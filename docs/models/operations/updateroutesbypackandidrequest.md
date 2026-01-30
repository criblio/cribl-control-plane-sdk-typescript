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
        id: "<id>",
        name: "<value>",
        disabled: true,
        filter: "<value>",
        pipeline: "<value>",
        enableOutputExpression: false,
        output: "<value>",
        outputExpression: "<value>",
        description: "instance gah squiggly however",
        final: false,
      },
    ],
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
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Routing table that contains the Route to update. The supported value is <code>default</code>. |
| `pack`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Pack to update.                                                                               |
| `routes`                                                                                                                 | [models.Routes](../../models/routes.md)                                                                                  | :heavy_check_mark:                                                                                                       | Routes object                                                                                                            |