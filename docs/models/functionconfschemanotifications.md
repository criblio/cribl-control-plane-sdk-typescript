# FunctionConfSchemaNotifications

## Example Usage

```typescript
import { FunctionConfSchemaNotifications } from "cribl-control-plane/models";

let value: FunctionConfSchemaNotifications = {
  id: "<id>",
  field: "<value>",
  deduplicate: false,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | Notification ID                     |
| `field`                             | *string*                            | :heavy_minus_sign:                  | Notification event state field name |
| `deduplicate`                       | *boolean*                           | :heavy_minus_sign:                  | Toggle deduplication.               |