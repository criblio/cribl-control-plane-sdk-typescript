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
        id: "<id>",
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
        description:
          "ack regularly uh-huh naturally kettledrum before frenetically beard inasmuch quickly",
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
| `routes`                                                                                                                 | [models.Routes](../../models/routes.md)                                                                                  | :heavy_check_mark:                                                                                                       | Routes object                                                                                                            |