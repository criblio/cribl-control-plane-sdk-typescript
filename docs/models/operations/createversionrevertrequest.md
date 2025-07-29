# CreateVersionRevertRequest

## Example Usage

```typescript
import { CreateVersionRevertRequest } from "cribl-control-plane/models/operations";

let value: CreateVersionRevertRequest = {
  gitRevertParams: {
    commit: "<value>",
    message: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `group`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Group ID                                                  |
| `gitRevertParams`                                         | [models.GitRevertParams](../../models/gitrevertparams.md) | :heavy_check_mark:                                        | GitRevertParams object                                    |