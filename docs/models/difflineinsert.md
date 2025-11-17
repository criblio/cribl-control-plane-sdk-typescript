# DiffLineInsert

## Example Usage

```typescript
import { DiffLineInsert } from "cribl-control-plane/models";

let value: DiffLineInsert = {
  type: "insert",
  newNumber: 8065.35,
  content: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [models.DiffLineInsertType](../models/difflineinserttype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `newNumber`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `content`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |