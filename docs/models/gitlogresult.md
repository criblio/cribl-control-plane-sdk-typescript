# GitLogResult

## Example Usage

```typescript
import { GitLogResult } from "cribl-control-plane/models";

let value: GitLogResult = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `authorEmail`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Email address of the commit author.                                  |
| `authorName`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Display name of the commit author.                                   |
| `body`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Body of the commit message, excluding the subject line.              |
| `date`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Date and time of the commit in ISO 8601 format with timezone offset. |
| `hash`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Full SHA-1 hash of the commit.                                       |
| `message`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | First line of the commit message (the subject).                      |
| `refs`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Git refs (branches, tags) pointing to this commit.                   |