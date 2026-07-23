# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    type: "servicenow_table",
    instance: "<value>",
    tableName: "<value>",
    cronSchedule: "<value>",
    earliest: "<value>",
    latest: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object.                                |