# Git

Git status of the Worker Group, Outpost Group, or Edge Fleet configuration. Automatically populated and returned in responses.

## Example Usage

```typescript
import { Git } from "cribl-control-plane/models";

let value: Git = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commit`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Commit hash of the currently committed configuration version. |
| `localChanges`                                                | *number*                                                      | :heavy_minus_sign:                                            | Number of local configuration changes not yet committed.      |
| `log`                                                         | [models.Commit](../models/commit.md)[]                        | :heavy_minus_sign:                                            | List of recent configuration commits.                         |