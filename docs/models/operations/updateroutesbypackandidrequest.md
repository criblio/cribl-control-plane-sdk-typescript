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
        description: "far-flung like instead zowie pertain concrete shovel",
        disabled: true,
      },
    },
    comments: [
      {
        comment:
          "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
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