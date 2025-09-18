# ListSearchDashboardResponse

a list of SearchDashboard objects

## Example Usage

```typescript
import { ListSearchDashboardResponse } from "cribl-control-plane/models/operations";

let value: ListSearchDashboardResponse = {
  count: 649424,
  items: [
    {
      cacheTTLSeconds: 8061.7,
      category: "<value>",
      created: 6377.07,
      createdBy: "<value>",
      description: "celebrate jive busily intently jury at aw",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [
        {
          description: "brr garrote slump yuck lamp since why",
          empty: true,
          group: "<value>",
          hidePanel: false,
          horizontalChart: false,
          id: "<id>",
          index: 3109.76,
          inputId: "<id>",
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
            url: "https://snarling-trick.info/",
          },
          type: "input.number",
          value: {
            "key": "<value>",
          },
          variant: "input",
        },
      ],
      groups: "<value>",
      id: "<id>",
      modified: 93.88,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 1802.61,
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
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.SearchDashboard](../../models/searchdashboard.md)[] | :heavy_minus_sign:                                          | N/A                                                         |