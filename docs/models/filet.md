# FileT

## Example Usage

```typescript
import { FileT } from "cribl-control-plane/models";

let value: FileT = {
  index: "<value>",
  path: "/usr/local/bin",
  working_dir: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `index`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | Status code for the file in the index (staging area), using Git short-format notation. |
| `path`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | File path relative to the configuration root.                                          |
| `workingDir`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Status code for the file in the working directory, using Git short-format notation.    |