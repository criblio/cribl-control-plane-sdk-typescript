# GetOutputSystemPqByPackAndIdRequest

## Example Usage

```typescript
import { GetOutputSystemPqByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetOutputSystemPqByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The <code>id</code> of the Destination to get PQ job information for. |
| `pack`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The <code>id</code> of the Pack to get.                               |