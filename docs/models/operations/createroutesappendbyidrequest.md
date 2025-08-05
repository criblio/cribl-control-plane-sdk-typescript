# CreateRoutesAppendByIdRequest

## Example Usage

```typescript
import { CreateRoutesAppendByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateRoutesAppendByIdRequest = {
  id: "<id>",
  requestBody: [
    {
      clones: [
        {},
      ],
      context: "<value>",
      description:
        "pro uh-huh yet phooey galvanize overwork final marvelous greedy opera",
      disabled: false,
      enableOutputExpression: false,
      filter: "<value>",
      final: false,
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | the route table to be appended to - currently default is the only supported value |
| `requestBody`                                                                     | [models.RouteConf](../../models/routeconf.md)[]                                   | :heavy_check_mark:                                                                | RouteDefinitions object                                                           |