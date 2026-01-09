# Audit

## Example Usage

```typescript
import { Audit } from "cribl-control-plane/models";

let value: Audit = {
  files: {
    created: [
      "<value 1>",
    ],
    deleted: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    modified: [
      "<value 1>",
      "<value 2>",
    ],
    renamed: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  group: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `files`                                                                    | [models.FilesTypeGitCommitSummary](../models/filestypegitcommitsummary.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |