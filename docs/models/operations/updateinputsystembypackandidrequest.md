# UpdateInputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateInputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  input: {
    type: "prometheus",
    interval: 8338.74,
    logLevel: "info",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `pack`                                       | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Pack to update.   |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |