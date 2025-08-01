# UpdateGroupsByIdRequest

## Example Usage

```typescript
import { UpdateGroupsByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateGroupsByIdRequest = {
  id: "<id>",
  configGroup: {
    configVersion: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Group ID                                          |
| `configGroup`                                     | [models.ConfigGroup](../../models/configgroup.md) | :heavy_check_mark:                                | ConfigGroup object                                |