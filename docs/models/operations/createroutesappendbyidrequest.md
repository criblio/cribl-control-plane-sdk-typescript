# CreateRoutesAppendByIdRequest

## Example Usage

```typescript
import { CreateRoutesAppendByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateRoutesAppendByIdRequest = {
  id: "<id>",
  requestBody: [
    {
      final: false,
      id: "<id>",
      name: "<value>",
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