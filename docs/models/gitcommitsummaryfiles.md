# GitCommitSummaryFiles

## Example Usage

```typescript
import { GitCommitSummaryFiles } from "cribl-control-plane/models";

let value: GitCommitSummaryFiles = {
  created: [
    "<value 1>",
  ],
  deleted: [
    "<value 1>",
    "<value 2>",
  ],
  modified: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  renamed: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `created`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `deleted`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `modified`         | *string*[]         | :heavy_minus_sign: | N/A                |
| `renamed`          | *string*[]         | :heavy_minus_sign: | N/A                |