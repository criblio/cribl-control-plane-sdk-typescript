# SearchDashboard

## Example Usage

```typescript
import { SearchDashboard } from "cribl-control-plane/models";

let value: SearchDashboard = {
  autoApplyDebounceMs: 1505.43,
  autoApplyMode: "all",
  autoApplyUrlSync: "replace",
  cacheTTLSeconds: 1211.71,
  category: "<value>",
  created: 982.92,
  createdBy: "<value>",
  description: "minus following mainstream carouse stiff where",
  displayCreatedBy: "<value>",
  displayModifiedBy: "<value>",
  elements: [],
  groups: {
    "key": {
      action: {
        label: "<value>",
        params: {
          "key": "<value>",
          "key1": "<value>",
        },
        target: "<value>",
      },
      collapsed: false,
      inputId: "<id>",
      title: "<value>",
    },
  },
  id: "<id>",
  modified: 3359.58,
  modifiedBy: "<value>",
  name: "<value>",
  packId: "<id>",
  refreshRate: 6820.1,
  resolvedDatasetIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  schedule: {
    cronSchedule: "<value>",
    enabled: false,
    keepLastN: 4581.38,
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `autoApplyDebounceMs`                                                  | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `autoApplyMode`                                                        | [models.AutoApplyMode](../models/autoapplymode.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `autoApplyUrlSync`                                                     | [models.AutoApplyUrlSync](../models/autoapplyurlsync.md)               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `cacheTTLSeconds`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `category`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `created`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdBy`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `displayCreatedBy`                                                     | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `displayModifiedBy`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `elements`                                                             | *models.DashboardElementUnion*[]                                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `groups`                                                               | Record<string, [models.DashboardGroups](../models/dashboardgroups.md)> | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modified`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modifiedBy`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `packId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `refreshRate`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `resolvedDatasetIds`                                                   | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `schedule`                                                             | [models.SavedQuerySchedule](../models/savedqueryschedule.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |