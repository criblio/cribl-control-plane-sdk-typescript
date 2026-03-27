# Rename

## Example Usage

```typescript
import { Rename } from "cribl-control-plane/models";

let value: Rename = {
  currentName: "<value>",
  newName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `currentName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Name of the field to rename. Literal identifiers must be quoted.           |
| `newName`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The name the field will be renamed to. Literal identifiers must be quoted. |