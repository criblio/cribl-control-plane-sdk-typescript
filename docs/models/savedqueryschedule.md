# SavedQuerySchedule

## Example Usage

```typescript
import { SavedQuerySchedule } from "cribl-control-plane/models";

let value: SavedQuerySchedule = {
  cronSchedule: "<value>",
  enabled: true,
  keepLastN: 9628.58,
  notifications: {
    disabled: false,
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
  },
  resumeMissed: true,
  resumeOnBoot: true,
  tz: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `cronSchedule`                                     | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `enabled`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `keepLastN`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `notifications`                                    | [models.Notifications](../models/notifications.md) | :heavy_minus_sign:                                 | N/A                                                |
| `resumeMissed`                                     | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `resumeOnBoot`                                     | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `tz`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |