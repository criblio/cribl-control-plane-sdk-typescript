# Git

## Example Usage

```typescript
import { Git } from "cribl-control-plane/models";

let value: Git = {
  commit: "<value>",
  localChanges: 5693.65,
  log: [
    {
      authorEmail: "<value>",
      authorName: "<value>",
      date: "2024-12-24",
      hash: "<value>",
      message: "<value>",
      short: "<value>",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `commit`                               | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `localChanges`                         | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `log`                                  | [models.Commit](../models/commit.md)[] | :heavy_minus_sign:                     | N/A                                    |