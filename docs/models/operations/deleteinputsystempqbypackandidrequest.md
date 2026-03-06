# DeleteInputSystemPqByPackAndIdRequest

## Example Usage

```typescript
import { DeleteInputSystemPqByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteInputSystemPqByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | The <code>id</code> of the Source to clear the PQ for. |
| `pack`                                                 | *string*                                               | :heavy_check_mark:                                     | The <code>id</code> of the Pack to clear.              |