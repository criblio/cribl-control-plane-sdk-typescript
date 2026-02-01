# GitFileRename

## Example Usage

```typescript
import { GitFileRename } from "cribl-control-plane/models";

let value: GitFileRename = {
  from: "<value>",
  to: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `from`                                | *string*                              | :heavy_check_mark:                    | Original file path before the rename. |
| `to`                                  | *string*                              | :heavy_check_mark:                    | New file path after the rename.       |