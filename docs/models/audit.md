# Audit

Audit record for the revert operation, including the commit hash and affected files.

## Example Usage

```typescript
import { Audit } from "cribl-control-plane/models";

let value: Audit = {
  id: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `files`                                                          | [models.GitRevertResultFiles](../models/gitrevertresultfiles.md) | :heavy_minus_sign:                                               | Files affected by the revert, grouped by change type.            |
| `group`                                                          | *string*                                                         | :heavy_minus_sign:                                               | Worker Group the revert was applied to, if applicable.           |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | SHA-1 hash of the revert commit that was created.                |