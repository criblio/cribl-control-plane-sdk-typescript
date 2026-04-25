# UpdateOutputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateOutputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  output: {
    type: "local_search_storage",
    url: "https://shiny-popularity.org/",
    database: "<value>",
    tableName: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `pack`                                            | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Pack to update.        |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |