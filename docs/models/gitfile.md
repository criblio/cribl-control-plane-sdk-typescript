# GitFile

## Example Usage

```typescript
import { GitFile } from "cribl-control-plane/models";

let value: GitFile = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `autoIncludedInCommit`                                                                                                                    | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | If <code>true</code>, this file is automatically included in commits without being explicitly listed. Otherwise, <code>false</code>.      |
| `children`                                                                                                                                | [models.GitFile](../models/gitfile.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                        | When this entry is a directory, nested files and subdirectories. Each array element matches this same object shape (recursive file tree). |
| `name`                                                                                                                                    | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Path of the file relative to the configuration root.                                                                                      |
| `state`                                                                                                                                   | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Git status code for the file: <code>M</code> for modified, <code>A</code> for added, or <code>D</code> for deleted.                       |