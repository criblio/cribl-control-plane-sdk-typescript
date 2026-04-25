# ObjectStorageFilter

## Example Usage

```typescript
import { ObjectStorageFilter } from "cribl-control-plane/models";

let value: ObjectStorageFilter = {
  dataTypeId: "<id>",
  filter: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dataPathFormat`                                                 | [models.PathFilterDataFormat](../models/pathfilterdataformat.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `dataTypeId`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `filter`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |