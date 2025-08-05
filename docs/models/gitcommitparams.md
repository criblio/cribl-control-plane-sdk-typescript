# GitCommitParams

## Example Usage

```typescript
import { GitCommitParams } from "cribl-control-plane/models";

let value: GitCommitParams = {
  effective: true,
  files: [
    "<value 1>",
    "<value 2>",
  ],
  group: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `effective`        | *boolean*          | :heavy_minus_sign: | N/A                |
| `files`            | *string*[]         | :heavy_minus_sign: | N/A                |
| `group`            | *string*           | :heavy_minus_sign: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |