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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The <code>id</code> of the Routing table to add the Route to. The supported value is <code>default</code>. |
| `requestBody`                                                                                              | [models.RouteConf](../../models/routeconf.md)[]                                                            | :heavy_check_mark:                                                                                         | RouteDefinitions object                                                                                    |