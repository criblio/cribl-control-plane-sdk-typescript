# CreateRoutesAppendByIdRequest

## Example Usage

```typescript
import { CreateRoutesAppendByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateRoutesAppendByIdRequest = {
  id: "<id>",
  requestBody: [
    {
      clones: [
        {
          "key": "<value>",
          "key1": "<value>",
        },
        {
          "key": "<value>",
        },
        {},
      ],
      context: "<value>",
      description: "gigantic healthily deeply rightfully",
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
    },
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The <code>id</code> of the Routing table to append the Route to. The supported value is <code>default</code>. |
| `requestBody`                                                                                                 | [models.RouteConf](../../models/routeconf.md)[]                                                               | :heavy_check_mark:                                                                                            | RouteDefinitions object                                                                                       |