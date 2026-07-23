# GitRevertResult

## Example Usage

```typescript
import { GitRevertResult } from "cribl-control-plane/models";

let value: GitRevertResult = {
  audit: {
    id: "<id>",
  },
  reverted: true,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `audit`                                                                                   | [models.Audit](../models/audit.md)                                                        | :heavy_check_mark:                                                                        | Audit record for the revert operation, including the commit hash and affected files.      |
| `reverted`                                                                                | *boolean*                                                                                 | :heavy_check_mark:                                                                        | If <code>true</code>, the revert was applied successfully. Otherwise, <code>false</code>. |