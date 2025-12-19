# OauthHeaderInfluxdb

## Example Usage

```typescript
import { OauthHeaderInfluxdb } from "cribl-control-plane/models/operations";

let value: OauthHeaderInfluxdb = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | OAuth header name  |
| `value`            | *string*           | :heavy_check_mark: | OAuth header value |