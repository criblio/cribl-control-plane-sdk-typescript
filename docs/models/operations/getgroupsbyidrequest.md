# GetGroupsByIdRequest

## Example Usage

```typescript
import { GetGroupsByIdRequest } from "cribl-control-plane/models/operations";

let value: GetGroupsByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | Group id                                                        |
| `fields`                                                        | *string*                                                        | :heavy_minus_sign:                                              | fields to add to results: git.commit, git.localChanges, git.log |