# UpdateRoutesByPackAndIdRequest

## Example Usage

```typescript
import { UpdateRoutesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateRoutesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  routes: {
    comments: [
      {
        comment:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        groupId: "<id>",
        id: "<id>",
        index: 9969.55,
      },
    ],
    groups: {
      "key": {
        description:
          "since armchair thoroughly mmm miserably basket ugh rectangular",
        index: 5527.34,
        name: "<value>",
      },
    },
    id: "<id>",
    routes: [
      {
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
        context: "<value>",
        description: "instance gah squiggly however",
        disabled: false,
        enableOutputExpression: true,
        filter: "<value>",
        final: true,
        groupId: "<id>",
        id: "<id>",
        name: "<value>",
        output: "<value>",
        outputExpression: "<value>",
        pipeline: "<value>",
        targetContext: "group",
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