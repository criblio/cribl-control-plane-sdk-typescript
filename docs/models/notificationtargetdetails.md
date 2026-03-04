# NotificationTargetDetails

## Example Usage

```typescript
import { NotificationTargetDetails } from "cribl-control-plane/models";

let value: NotificationTargetDetails = {
  id: "<id>",
  type: "smtp",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `id`                           | *string*                       | :heavy_check_mark:             | ID of the notification target. |                                |
| `type`                         | *string*                       | :heavy_check_mark:             | Target type.                   | smtp                           |