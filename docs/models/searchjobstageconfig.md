# SearchJobStageConfig

## Example Usage

```typescript
import { SearchJobStageConfig } from "cribl-control-plane/models";

let value: SearchJobStageConfig = {
  cacheStatusByDatasetId: {
    "key": {
      reason: "<value>",
      usedCache: true,
    },
  },
  dependencies: [],
  earliest: "<value>",
  executionWarnings: [
    {
      text: "<value>",
      type: "<value>",
    },
  ],
  filter: "<value>",
  id: "<id>",
  latest: "<value>",
  resolvedDatasetIds: [
    "<value 1>",
    "<value 2>",
  ],
  searchConfig: {
    canComputeMetadataDistributively: false,
    datasets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
              description:
                "poorly huzzah disinherit considering pomelo barring",
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
              description:
                "poorly huzzah disinherit considering pomelo barring",
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
              description:
                "poorly huzzah disinherit considering pomelo barring",
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
  },
  status: "new",
  subQueryText: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `cacheStatusByDatasetId`                                                     | Record<string, *models.CacheStatusByDatasetIdUnion*>                         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `dependencies`                                                               | [models.StageDependency](../models/stagedependency.md)[]                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `earliest`                                                                   | *models.SearchJobStageConfigEarliest*                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `executionWarnings`                                                          | [models.JobExecutionWarning](../models/jobexecutionwarning.md)[]             | :heavy_minus_sign:                                                           | N/A                                                                          |
| `filter`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `latest`                                                                     | *models.SearchJobStageConfigLatest*                                          | :heavy_minus_sign:                                                           | N/A                                                                          |
| `resolvedDatasetIds`                                                         | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `searchConfig`                                                               | [models.SearchConfig](../models/searchconfig.md)                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [models.SearchJobStageConfigStatus](../models/searchjobstageconfigstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `subQueryText`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |