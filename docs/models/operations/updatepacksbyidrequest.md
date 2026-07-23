# UpdatePacksByIdRequest

## Example Usage

```typescript
import { UpdatePacksByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePacksByIdRequest = {
  id: "<id>",
  packUpgradeRequest: {
    source: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | The <code>id</code> of the Pack to upgrade. Use the <code>id</code> field from the list response. |
| `packUpgradeRequest`                                                                              | [models.PackUpgradeRequest](../../models/packupgraderequest.md)                                   | :heavy_check_mark:                                                                                | PackUpgradeRequest object.                                                                        |