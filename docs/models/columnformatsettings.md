# ColumnFormatSettings

## Example Usage

```typescript
import { ColumnFormatSettings } from "cribl-control-plane/models";

let value: ColumnFormatSettings = {
  palette: {
    "key": "<value>",
  },
  precision: {},
  prefix: {
    "key": "<value>",
    "key1": "<value>",
  },
  suffix: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `palette`             | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `precision`           | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `prefix`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `suffix`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |