# GitRevertResultFiles

## Example Usage

```typescript
import { GitRevertResultFiles } from "cribl-control-plane/models";

let value: GitRevertResultFiles = {
  created: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  deleted: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  modified: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  renamed: [
    "<value 1>",
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