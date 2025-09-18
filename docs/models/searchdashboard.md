# SearchDashboard

## Example Usage

```typescript
import { SearchDashboard } from "cribl-control-plane/models";

let value: SearchDashboard = {
  cacheTTLSeconds: 1505.43,
  category: "<value>",
  created: 7624.57,
  createdBy: "<value>",
  description: "doubter option apropos far lest covenant",
  displayCreatedBy: "<value>",
  displayModifiedBy: "<value>",
  elements: [],
  groups: "<value>",
  id: "<id>",
  modified: 529.4,
  modifiedBy: "<value>",
  name: "<value>",
  packId: "<id>",
  refreshRate: 7976.26,
  resolvedDatasetIds: [
    "<value 1>",
    "<value 2>",
  ],
  schedule: {
    cronSchedule: "<value>",
    enabled: true,
    keepLastN: 6211.38,
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
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cacheTTLSeconds`                                            | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `category`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `created`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdBy`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `displayCreatedBy`                                           | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `displayModifiedBy`                                          | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `elements`                                                   | *models.DashboardElementUnion*[]                             | :heavy_check_mark:                                           | N/A                                                          |
| `groups`                                                     | *any*                                                        | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modified`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modifiedBy`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `packId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `refreshRate`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `resolvedDatasetIds`                                         | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |
| `schedule`                                                   | [models.SavedQuerySchedule](../models/savedqueryschedule.md) | :heavy_minus_sign:                                           | N/A                                                          |