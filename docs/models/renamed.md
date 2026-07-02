# Renamed

## Example Usage

```typescript
import { Renamed } from "cribl-control-plane/models";

let value: Renamed = {
  from: "<value>",
  to: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `from`                                | *string*                              | :heavy_check_mark:                    | Original file path before the rename. |
| `to`                                  | *string*                              | :heavy_check_mark:                    | New file path after the rename.       |