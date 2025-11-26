# DiffLineContext

## Example Usage

```typescript
import { DiffLineContext } from "cribl-control-plane/models";

let value: DiffLineContext = {
  type: "context",
  newNumber: 355.68,
  oldNumber: 7311.23,
  content: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.DiffLineContextType](../models/difflinecontexttype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `newNumber`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `oldNumber`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `content`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |