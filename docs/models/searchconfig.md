# SearchConfig

## Example Usage

```typescript
import { SearchConfig } from "cribl-control-plane/models";

let value: SearchConfig = {
  canComputeMetadataDistributively: false,
  datasets: [
    "<value 1>",
    "<value 2>",
  ],
  hasSendOperator: true,
  logicalPlans: {
    combined: {
      "key": [],
    },
    coordinated: {
      isPreviewableOperation: false,
      type: "sort",
    },
    federated: {
      isPreviewableOperation: true,
      type: "filter",
    },
  },
  orderedFieldNames: [],
  pipelines: {
    combined: {
      id: "<id>",
      conf: {
        asyncFuncTimeout: 930714,
        description: "independence mad spring owlishly expert yowza",
        streamtags: [
          "<value 1>",
          "<value 2>",
        ],
        functions: [
          {
            id: "<id>",
            description: "poorly huzzah disinherit considering pomelo barring",
            disabled: true,
            final: true,
            conf: {},
            groupId: "<id>",
          },
        ],
        groups: {
          "key": {
            name: "<value>",
            description: "bah out great",
            disabled: false,
          },
        },
      },
    },
    coordinated: {
      id: "<id>",
      conf: {
        asyncFuncTimeout: 930714,
        description: "independence mad spring owlishly expert yowza",
        streamtags: [
          "<value 1>",
          "<value 2>",
        ],
        functions: [
          {
            id: "<id>",
            description: "poorly huzzah disinherit considering pomelo barring",
            disabled: true,
            final: true,
            conf: {},
            groupId: "<id>",
          },
        ],
        groups: {
          "key": {
            name: "<value>",
            description: "bah out great",
            disabled: false,
          },
        },
      },
    },
    federated: {
      id: "<id>",
      conf: {
        asyncFuncTimeout: 930714,
        description: "independence mad spring owlishly expert yowza",
        streamtags: [
          "<value 1>",
          "<value 2>",
        ],
        functions: [
          {
            id: "<id>",
            description: "poorly huzzah disinherit considering pomelo barring",
            disabled: true,
            final: true,
            conf: {},
            groupId: "<id>",
          },
        ],
        groups: {
          "key": {
            name: "<value>",
            description: "bah out great",
            disabled: false,
          },
        },
      },
    },
  },
  referencedColumnPaths: [
    [
      "<value 1>",
    ],
    [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    [],
  ],
  searchTerms: [],
  sortFields: [
    {
      direction: "descending",
      fieldName: "<value>",
      nullPosition: "nullsLast",
    },
  ],
  useFormattedVisualization: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `canComputeMetadataDistributively`               | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `datasets`                                       | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `hasSendOperator`                                | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `logicalPlans`                                   | [models.LogicalPlans](../models/logicalplans.md) | :heavy_check_mark:                               | N/A                                              |
| `orderedFieldNames`                              | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `pipelines`                                      | [models.Pipelines](../models/pipelines.md)       | :heavy_check_mark:                               | N/A                                              |
| `referencedColumnPaths`                          | *string*[][]                                     | :heavy_minus_sign:                               | N/A                                              |
| `searchTerms`                                    | [models.SearchTerm](../models/searchterm.md)[]   | :heavy_check_mark:                               | N/A                                              |
| `sortFields`                                     | [models.SortByField](../models/sortbyfield.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `useFormattedVisualization`                      | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |