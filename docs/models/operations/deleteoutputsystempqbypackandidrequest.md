# DeleteOutputSystemPqByPackAndIdRequest

## Example Usage

```typescript
import { DeleteOutputSystemPqByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteOutputSystemPqByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Destination to clear the PQ for. |
| `pack`                                                      | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Pack to clear.                   |