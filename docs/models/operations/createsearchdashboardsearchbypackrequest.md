# CreateSearchDashboardSearchByPackRequest

## Example Usage

```typescript
import { CreateSearchDashboardSearchByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateSearchDashboardSearchByPackRequest = {
  pack: "<value>",
  searchDashboard: {
    cacheTTLSeconds: 2459.66,
    category: "<value>",
    created: 836.02,
    createdBy: "<value>",
    description: "duh pressure while whether at ecstatic warmhearted",
    displayCreatedBy: "<value>",
    displayModifiedBy: "<value>",
    elements: [],
    groups: "<value>",
    id: "<id>",
    modified: 6358.61,
    modifiedBy: "<value>",
    name: "<value>",
    packId: "<id>",
    refreshRate: 8662.47,
    resolvedDatasetIds: [
      "<value 1>",
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
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `pack`                                                    | *string*                                                  | :heavy_check_mark:                                        | pack ID to POST                                           |
| `searchDashboard`                                         | [models.SearchDashboard](../../models/searchdashboard.md) | :heavy_check_mark:                                        | New SearchDashboard object                                |