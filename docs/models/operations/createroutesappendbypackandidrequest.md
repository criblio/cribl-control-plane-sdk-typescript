# CreateRoutesAppendByPackAndIdRequest

## Example Usage

```typescript
import { CreateRoutesAppendByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: CreateRoutesAppendByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
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
| `pack`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The <code>id</code> of the Pack to append.                                                                 |
| `requestBody`                                                                                              | [models.RouteConf](../../models/routeconf.md)[]                                                            | :heavy_check_mark:                                                                                         | RouteDefinitions object                                                                                    |