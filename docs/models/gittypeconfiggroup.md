# GitTypeConfigGroup

## Example Usage

```typescript
import { GitTypeConfigGroup } from "cribl-control-plane/models";

let value: GitTypeConfigGroup = {
  commit: "<value>",
  localChanges: 3244.64,
  log: [
    {
      author_email: "<value>",
      author_name: "<value>",
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