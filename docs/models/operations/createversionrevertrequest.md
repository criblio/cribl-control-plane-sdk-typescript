# CreateVersionRevertRequest

## Example Usage

```typescript
import { CreateVersionRevertRequest } from "cribl-control-plane/models/operations";

let value: CreateVersionRevertRequest = {
  gitRevertParams: {
    commit: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                                                                                 | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The <code>id</code> of the Worker Group or Edge Fleet to revert the commit for. Required in Distributed deployments. Omit in Single-instance deployments. |
| `gitRevertParams`                                                                                                                                         | [models.GitRevertParams](../../models/gitrevertparams.md)                                                                                                 | :heavy_check_mark:                                                                                                                                        | GitRevertParams object                                                                                                                                    |