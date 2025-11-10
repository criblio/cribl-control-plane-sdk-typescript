# GitType

## Example Usage

```typescript
import { GitType } from "cribl-control-plane/models";

let value: GitType = {
  commit: "<value>",
  localChanges: 5795.57,
  log: [
    {
      authorEmail: "<value>",
      authorName: "<value>",
      date: "2024-12-12",
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