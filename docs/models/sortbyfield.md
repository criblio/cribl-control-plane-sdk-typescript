# SortByField

## Example Usage

```typescript
import { SortByField } from "cribl-control-plane/models";

let value: SortByField = {
  direction: "ascending",
  fieldName: "<value>",
  nullPosition: "nullsLast",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `direction`                                      | [models.Direction](../models/direction.md)       | :heavy_check_mark:                               | N/A                                              |
| `fieldName`                                      | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `nullPosition`                                   | [models.NullPosition](../models/nullposition.md) | :heavy_check_mark:                               | N/A                                              |