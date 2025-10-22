# GetSearchDashboardByIdResponse

a list of SearchDashboard objects

## Example Usage

```typescript
import { GetSearchDashboardByIdResponse } from "cribl-control-plane/models/operations";

let value: GetSearchDashboardByIdResponse = {
  count: 714850,
  items: [
    {
      autoApplyDebounceMs: 8061.7,
      autoApplyMode: "metric",
      autoApplyUrlSync: "replace",
      cacheTTLSeconds: 8114.65,
      category: "<value>",
      created: 6506.36,
      createdBy: "<value>",
      description: "suspiciously but rubric abaft",
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
      modified: 4920.88,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 9699,
      resolvedDatasetIds: [
        "<value 1>",
        "<value 2>",
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
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.SearchDashboard](../../models/searchdashboard.md)[] | :heavy_minus_sign:                                          | N/A                                                         |