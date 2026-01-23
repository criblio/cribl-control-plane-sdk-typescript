# OauthHeader

## Example Usage

```typescript
import { OauthHeader } from "cribl-control-plane/models/operations";

let value: OauthHeader = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | OAuth header name  |
| `value`            | *string*           | :heavy_check_mark: | OAuth header value |