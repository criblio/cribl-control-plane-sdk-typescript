# DiffLineDelete

## Example Usage

```typescript
import { DiffLineDelete } from "cribl-control-plane/models";

let value: DiffLineDelete = {
  type: "delete",
  oldNumber: 2816.95,
  content: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [models.DiffLineDeleteType](../models/difflinedeletetype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `oldNumber`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `content`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |