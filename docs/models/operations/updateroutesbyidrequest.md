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
        description: "finally considering pink geez when",
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description:
          "pish always what trench arcade meh regarding source supposing on",
        disabled: true,
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The <code>id</code> of the Routing table that contains the Route to update. The supported value is <code>default</code>. |
| `routes`                                                                                                                 | [models.Routes](../../models/routes.md)                                                                                  | :heavy_check_mark:                                                                                                       | Routes object                                                                                                            |