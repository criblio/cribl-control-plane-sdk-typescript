# FunctionNotificationsConf

## Example Usage

```typescript
import { FunctionNotificationsConf } from "cribl-control-plane/models";

let value: FunctionNotificationsConf = {
  id: "<id>",
  field: "<value>",
  deduplicate: false,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_check_mark:                  | Notification ID                     |
| `field`                             | *string*                            | :heavy_check_mark:                  | Notification event state field name |
| `deduplicate`                       | *boolean*                           | :heavy_check_mark:                  | Toggle deduplication.               |