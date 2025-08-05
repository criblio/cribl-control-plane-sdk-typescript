# GitRevertResult

## Example Usage

```typescript
import { GitRevertResult } from "cribl-control-plane/models";

let value: GitRevertResult = {
  audit: {
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
  },
  reverted: true,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `audit`                            | [models.Audit](../models/audit.md) | :heavy_check_mark:                 | N/A                                |
| `reverted`                         | *boolean*                          | :heavy_check_mark:                 | N/A                                |