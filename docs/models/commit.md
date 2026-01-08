# Commit

## Example Usage

```typescript
import { Commit } from "cribl-control-plane/models";

let value: Commit = {
  author_email: "<value>",
  author_name: "<value>",
  date: "2024-06-13",
  hash: "<value>",
  message: "<value>",
  short: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `authorEmail`      | *string*           | :heavy_minus_sign: | N/A                |
| `authorName`       | *string*           | :heavy_minus_sign: | N/A                |
| `date`             | *string*           | :heavy_check_mark: | N/A                |
| `hash`             | *string*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `short`            | *string*           | :heavy_check_mark: | N/A                |