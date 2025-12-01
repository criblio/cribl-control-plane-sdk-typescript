# Audit

## Example Usage

```typescript
import { Audit } from "cribl-control-plane/models";

let value: Audit = {
  files: {
    created: [
      "<value 1>",
      "<value 2>",
    ],
    deleted: [
      "<value 1>",
    ],
    modified: [
      "<value 1>",
      "<value 2>",
    ],
    renamed: [
      "<value 1>",
    ],
  },
  group: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `files`                                                          | [models.GitRevertResultFiles](../models/gitrevertresultfiles.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |