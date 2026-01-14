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
        filter: "<value>",
        pipeline: "<value>",
        enableOutputExpression: false,
        output: "<value>",
        outputExpression: "<value>",
        description: "how stay quickly perfectly lest self-assured gosh",
        final: false,
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description:
          "march meanwhile potentially although trouser wearily furthermore weary whereas",
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