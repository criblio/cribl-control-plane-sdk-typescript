# GetInputSystemByPackAndIdRequest

## Example Usage

```typescript
import { GetInputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetInputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | The <code>id</code> of the Source to get. |
| `pack`                                    | *string*                                  | :heavy_check_mark:                        | The <code>id</code> of the Pack to get.   |