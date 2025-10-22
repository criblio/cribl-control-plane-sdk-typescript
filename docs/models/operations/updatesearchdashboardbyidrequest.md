# UpdateSearchDashboardByIdRequest

## Example Usage

```typescript
import { UpdateSearchDashboardByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSearchDashboardByIdRequest = {
  id: "<id>",
  searchDashboard: {
    autoApplyDebounceMs: 2459.66,
    autoApplyMode: "off",
    autoApplyUrlSync: "replace",
    cacheTTLSeconds: 1120.09,
    category: "<value>",
    created: 170.8,
    createdBy: "<value>",
    description:
      "evenly dampen complicated nicely ack piglet towards though underneath rundown",
    displayCreatedBy: "<value>",
    displayModifiedBy: "<value>",
    elements: [
      {
        config: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        description: "singe angrily times edge now",
        empty: true,
        group: "<value>",
        hidePanel: false,
        horizontalChart: false,
        id: "<id>",
        index: 5806.58,
        layout: {
          h: 7723.39,
          w: 5289.56,
          x: 8808.52,
          y: 558.53,
        },
        search: {
          type: "values",
          values: [
            "<value 1>",
          ],
        },
        title: "<value>",
        titleAction: {
          label: "<value>",
          openInNewTab: true,
          url: "https://pertinent-flood.name",
        },
        type: "custom.throughputMetrics",
        variant: "visualization",
      },
    ],
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
    modified: 1834.03,
    modifiedBy: "<value>",
    name: "<value>",
    packId: "<id>",
    refreshRate: 5585.11,
    resolvedDatasetIds: [
      "<value 1>",
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
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | Unique ID to PATCH                                        |
| `searchDashboard`                                         | [models.SearchDashboard](../../models/searchdashboard.md) | :heavy_check_mark:                                        | SearchDashboard object to be updated                      |