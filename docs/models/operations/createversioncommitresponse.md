# CreateVersionCommitResponse

a list of GitCommitSummary objects

## Example Usage

```typescript
import { CreateVersionCommitResponse } from "cribl-control-plane/models/operations";

let value: CreateVersionCommitResponse = {
  count: 588221,
  items: [
    {
      author: {
        email: "Nicklaus.Nolan@yahoo.com",
        name: "<value>",
      },
      branch: "<value>",
      commit: "<value>",
      files: {
        created: [
          "<value 1>",
          "<value 2>",
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
      summary: {
        changes: 5958.84,
        deletions: 4410.47,
        insertions: 8113.93,
      },
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `count`                                                       | *number*                                                      | :heavy_minus_sign:                                            | number of items present in the items array                    |
| `items`                                                       | [models.GitCommitSummary](../../models/gitcommitsummary.md)[] | :heavy_minus_sign:                                            | N/A                                                           |