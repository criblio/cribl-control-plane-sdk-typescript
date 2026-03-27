# GetRoutesByPackAndIdRequest

## Example Usage

```typescript
import { GetRoutesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetRoutesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The <code>id</code> of the Routing table to get. The supported value is <code>default</code>. |
| `pack`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The <code>id</code> of the Pack to get.                                                       |