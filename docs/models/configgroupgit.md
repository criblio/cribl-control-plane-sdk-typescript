# ConfigGroupGit

## Example Usage

```typescript
import { ConfigGroupGit } from "cribl-control-plane/models";

let value: ConfigGroupGit = {
  commit: "<value>",
  localChanges: 3260.28,
  log: [
    {
      authorEmail: "<value>",
      authorName: "<value>",
      date: "2024-08-07",
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