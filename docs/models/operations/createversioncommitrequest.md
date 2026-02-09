# CreateVersionCommitRequest

## Example Usage

```typescript
import { CreateVersionCommitRequest } from "cribl-control-plane/models/operations";

let value: CreateVersionCommitRequest = {
  gitCommitParams: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `groupId`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | The <code>id</code> of the Worker Group or Edge Fleet to create a new commit for. |
| `gitCommitParams`                                                                 | [models.GitCommitParams](../../models/gitcommitparams.md)                         | :heavy_check_mark:                                                                | GitCommitParams object                                                            |