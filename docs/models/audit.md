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
    ],
    modified: [
      "<value 1>",
    ],
    renamed: [
      "<value 1>",
      "<value 2>",
    ],
  },
  group: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `files`                                                          | [models.GitRevertResultFiles](../models/gitrevertresultfiles.md) | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |