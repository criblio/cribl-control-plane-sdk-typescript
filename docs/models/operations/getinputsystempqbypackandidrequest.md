# GetInputSystemPqByPackAndIdRequest

## Example Usage

```typescript
import { GetInputSystemPqByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetInputSystemPqByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The <code>id</code> of the Source to get PQ job information for. |
| `pack`                                                           | *string*                                                         | :heavy_check_mark:                                               | The <code>id</code> of the Pack to get.                          |