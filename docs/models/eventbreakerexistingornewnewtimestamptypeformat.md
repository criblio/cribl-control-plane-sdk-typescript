# EventBreakerExistingOrNewNewTimestampTypeFormat

## Example Usage

```typescript
import { EventBreakerExistingOrNewNewTimestampTypeFormat } from "cribl-control-plane/models";

let value: EventBreakerExistingOrNewNewTimestampTypeFormat = {
  type: "format",
  format: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"format"*         | :heavy_check_mark: | Timestamp type     |
| `format`           | *string*           | :heavy_check_mark: | Format             |
| `length`           | *number*           | :heavy_minus_sign: | Length             |