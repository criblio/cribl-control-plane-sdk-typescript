# GitRevertResult

## Example Usage

```typescript
import { GitRevertResult } from "cribl-control-plane/models";

let value: GitRevertResult = {
  audit: {
    files: {},
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