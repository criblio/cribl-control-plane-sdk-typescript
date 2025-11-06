# GroupCreateRequestGit

## Example Usage

```typescript
import { GroupCreateRequestGit } from "cribl-control-plane/models";

let value: GroupCreateRequestGit = {
  commit: "<value>",
  localChanges: 3782.84,
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