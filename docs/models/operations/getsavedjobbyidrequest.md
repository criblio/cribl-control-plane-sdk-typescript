# GetSavedJobByIdRequest

## Example Usage

```typescript
import { GetSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: GetSavedJobByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | The <code>id</code> of the Collector to get.                        |
| `criblPack`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The <code>id</code> of the Pack that includes the Collector to get. |