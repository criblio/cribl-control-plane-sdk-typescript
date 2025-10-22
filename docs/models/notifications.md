# Notifications

## Example Usage

```typescript
import { Notifications } from "cribl-control-plane/models";

let value: Notifications = {
  disabled: true,
  items: [
    {
      id: "<id>",
      condition: "<value>",
      targets: [
        "<value 1>",
        "<value 2>",
      ],
      targetConfigs: [
        {
          conf: {
            subject: "<value>",
            body: "<value>",
            emailRecipient: {
              to: "<value>",
              cc: "<value>",
              bcc: "<value>",
            },
          },
          id: "<id>",
        },
      ],
      conf: {},
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `disabled`                                         | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `items`                                            | [models.Notification](../models/notification.md)[] | :heavy_minus_sign:                                 | N/A                                                |