# Block

## Example Usage

```typescript
import { Block } from "cribl-control-plane/models";

let value: Block = {
  header: "<value>",
  lines: [
    {
      type: "insert",
      newNumber: 7018.18,
      content: "<value>",
    },
  ],
  newStartLine: 1288.5,
  oldStartLine: 3290.46,
  oldStartLine2: 2532.35,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `header`           | *string*           | :heavy_check_mark: | N/A                |
| `lines`            | *models.Line*[]    | :heavy_check_mark: | Diff Line          |
| `newStartLine`     | *number*           | :heavy_check_mark: | N/A                |
| `oldStartLine`     | *number*           | :heavy_check_mark: | N/A                |
| `oldStartLine2`    | *number*           | :heavy_minus_sign: | N/A                |