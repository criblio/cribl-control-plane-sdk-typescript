# Commit

## Example Usage

```typescript
import { Commit } from "cribl-control-plane/models";

let value: Commit = {
  date: "2024-06-13",
  hash: "<value>",
  message: "<value>",
  short: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `authorEmail`                       | *string*                            | :heavy_minus_sign:                  | Email address of the commit author. |
| `authorName`                        | *string*                            | :heavy_minus_sign:                  | Name of the commit author.          |
| `date`                              | *string*                            | :heavy_check_mark:                  | Date and time of the commit.        |
| `hash`                              | *string*                            | :heavy_check_mark:                  | Full commit hash.                   |
| `message`                           | *string*                            | :heavy_check_mark:                  | Commit message.                     |
| `short`                             | *string*                            | :heavy_check_mark:                  | Abbreviated commit hash.            |