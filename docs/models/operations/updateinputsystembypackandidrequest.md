# UpdateInputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateInputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  input: {
    type: "office365_mgmt",
    planType: "dod",
    tenantId: "<id>",
    appId: "<id>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `pack`                                       | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Pack.             |
| `input`                                      | *models.Input2*                              | :heavy_check_mark:                           | Input object                                 |