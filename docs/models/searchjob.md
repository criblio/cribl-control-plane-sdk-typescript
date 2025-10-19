# SearchJob

## Example Usage

```typescript
import { SearchJob } from "cribl-control-plane/models";

let value: SearchJob = {
  accelerated: false,
  aliasOfOriginalJobId: "<id>",
  chartConfig: {
    applyThreshold: true,
    axis: {
      xAxis: "<value>",
      yAxis: [
        "<value 1>",
      ],
      yAxisExcluded: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    color: "teal",
    colorPalette: 3025.27,
    colorPaletteReversed: true,
    colorThresholds: {
      thresholds: [],
    },
    customData: {
      connectNulls: "<value>",
      dataFields: [
        "<value 1>",
      ],
      isPointColor: false,
      limitToTopN: 8812.15,
      lines: true,
      nameField: "<value>",
      pointColorPalette: 1780.78,
      pointColorPaletteReversed: true,
      pointScale: "<value>",
      pointScaleDataField: "<value>",
      seriesCount: 6130.09,
      splitBy: "<value>",
      stack: false,
      summarizeOthers: false,
      trellis: true,
    },
    decimals: 1258.25,
    label: "<value>",
    legend: {
      position: "<value>",
      selected: {
        "key": true,
      },
      truncate: false,
    },
    mapDetails: {
      latitudeField: "<value>",
      longitudeField: "<value>",
      mapSourceID: "<id>",
      mapType: "<value>",
      nameField: "<value>",
      pointScale: 662.94,
      valueField: "<value>",
    },
    onClickAction: {
      search: "<value>",
      selectedDashboardId: "<id>",
      selectedInputId: "<id>",
      selectedLinkId: "<id>",
      selectedTimerangeInputId: "<id>",
      type: "<value>",
    },
    prefix: "<value>",
    separator: false,
    series: [
      {
        areaStyle: {
          opacity: 3027.91,
          shadowBlur: 5545.23,
          shadowColor: "<value>",
          shadowOffsetX: 6491.46,
          shadowOffsetY: 9161.61,
        },
        color: "fuchsia",
        data: [
          {},
        ],
        map: "<value>",
        name: "<value>",
        type: "single",
        yAxisField: "<value>",
      },
    ],
    seriesInfo: {
      "key": "area",
    },
    shouldApplyUserChartSettings: true,
    style: false,
    suffix: "<value>",
    type: "<value>",
    xAxis: {
      dataField: "<value>",
      inverse: false,
      labelInterval: "<value>",
      labelOrientation: 7102.58,
      name: "<value>",
      offset: 7671.67,
      position: "<value>",
      type: "<value>",
    },
    yAxis: {
      dataField: [
        "<value 1>",
        "<value 2>",
      ],
      interval: 7587.04,
      max: 8208.97,
      min: 1374.88,
      position: "<value>",
      scale: "<value>",
      splitLine: false,
      type: "<value>",
    },
  },
  compatibilityChecks: {
    datatypes: true,
    stageIds: [
      "<value 1>",
    ],
  },
  completionInfo: "<value>",
  context: "<value>",
  correlationId: "<id>",
  cpuMetrics: {
    billableCPUSeconds: 1809.06,
    executorsCPUSeconds: {
      "key": 5774.49,
    },
    totalCPUSeconds: 3854,
    totalExecCPUSeconds: 1758.13,
  },
  datatypeOverrides: {
    breakerRulesets: [
      {
        id: "<id>",
        description: "wherever card till legislature tough amend",
        tags: "<value>",
        rules: [
          {
            name: "<value>",
            timestamp: {
              format: "<value>",
            },
            fields: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
        ],
      },
    ],
    disableBreakers: true,
  },
  disableNotifications: false,
  displayUsername: "<value>",
  earliest: 2799.61,
  earliestEpoch: 2764.28,
  errorStateConfig: {
    coordinated: true,
    errorMessages: [
      "<value 1>",
      "<value 2>",
    ],
  },
  group: "<value>",
  id: "<id>",
  isPrivate: true,
  latest: "<value>",
  latestEpoch: 9468.45,
  metadata: {
    arguments: {
      "key": [
        {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        {
          "key": "<value>",
          "key1": "<value>",
        },
        {
          "key": "<value>",
          "key1": "<value>",
        },
      ],
      "key1": [
        {},
      ],
    },
    computeTypes: {
      v1: 9704,
      v2: 1656.84,
      lakehouse: 2862.23,
    },
    datasets: {
      "key": 420.79,
      "key1": 6593.48,
      "key2": 306.53,
    },
    functions: {
      "key": 3786.44,
      "key1": 1015.48,
      "key2": 4173.09,
    },
    operators: {
      "key": 223.03,
      "key1": 7120.65,
    },
    providerTypes: {
      "key": 7883.06,
      "key1": 7554.82,
    },
    providers: {
      "key": 7209.15,
    },
  },
  notebookId: "<id>",
  numEventsAfter: 7088.37,
  numEventsBefore: 2958.73,
  query: "<value>",
  queryWithMacrosResolved: "<value>",
  sampleRate: 8763.36,
  savedQueryName: "<value>",
  searchParameterDeclarations: [
    {
      defaultValue: true,
      name: "<value>",
      type: "boolean",
    },
  ],
  searchParameterValues: {
    "key": 5363.44,
  },
  setOptions: {
    "key": 1999.37,
  },
  stages: [
    {
      cacheStatusByDatasetId: {
        "key": {
          usedCache: false,
        },
      },
      dependencies: [
        {
          dependentFields: [
            "<value 1>",
          ],
          id: "<id>",
          type: "stage-scalar",
        },
      ],
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
        "<value 3>",
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
      status: "completed",
      subQueryText: "<value>",
    },
  ],
  status: "canceled",
  tableConfig: {
    columnFilterSettings: {
      contains: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
    columnFormatSettings: {
      palette: {
        "key": "<value>",
      },
      precision: {},
      prefix: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      suffix: {},
    },
    columnOrderSettings: {
      order: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
    columnSortSettings: {
      sort: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
    eventDetailsPanel: false,
    eventTableFields: [
      "<value 1>",
    ],
    rowNumberColumnWidth: 8292.08,
    showColumnTotals: false,
    showColumnTotalsPinned: false,
    showRowNumbers: true,
    showRowTotals: false,
    showRowTotalsPinned: true,
    wrapCells: true,
  },
  targetEventTime: 251.98,
  timeCompleted: 986.04,
  timeCreated: 4191.09,
  timeStarted: 6888.76,
  timeToFirstByte: 209.07,
  totalBytesScanned: 5268.97,
  totalEventCount: 4964.91,
  type: "notebook",
  usageGroupId: "<id>",
  usageMetrics: {
    bytesIn: 5380.47,
    bytesOut: 4326.2,
    eventsIn: 4158.21,
    eventsOut: 367.59,
    objects: {
      discovered: 1725.61,
      scanned: 7271.86,
      skipped: 2277.13,
    },
    tasks: {
      largeFileTaskCount: 7980.85,
      standardTaskCount: 1822.9,
    },
    time: {
      queuedSec: 3480.65,
      runningSec: 5360.85,
      taskCompletionTotalSec: 9502.28,
      taskReceivingTotalSec: 3415.63,
    },
  },
  user: "Trenton58",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accelerated`                                                              | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `aliasOfOriginalJobId`                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `chartConfig`                                                              | [models.ChartConfig](../models/chartconfig.md)                             | :heavy_minus_sign:                                                         | N/A                                                                        |
| `compatibilityChecks`                                                      | [models.CompatibilityChecks](../models/compatibilitychecks.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |
| `completionInfo`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `context`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `correlationId`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `cpuMetrics`                                                               | [models.CPUTimeMetric](../models/cputimemetric.md)                         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `datatypeOverrides`                                                        | [models.DatatypeOverrides](../models/datatypeoverrides.md)                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `disableNotifications`                                                     | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `displayUsername`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `earliest`                                                                 | *models.SearchJobEarliest*                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `earliestEpoch`                                                            | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `errorStateConfig`                                                         | [models.SearchJobErrorStateConfig](../models/searchjoberrorstateconfig.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `isPrivate`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `latest`                                                                   | *models.SearchJobLatest*                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `latestEpoch`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `metadata`                                                                 | [models.SearchJobMetadata](../models/searchjobmetadata.md)                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `notebookId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `numEventsAfter`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `numEventsBefore`                                                          | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `query`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `queryWithMacrosResolved`                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sampleRate`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `savedQueryName`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `searchParameterDeclarations`                                              | [models.SearchParameter](../models/searchparameter.md)[]                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `searchParameterValues`                                                    | Record<string, *models.SearchParameters*>                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `setOptions`                                                               | Record<string, *models.SetOptions*>                                        | :heavy_minus_sign:                                                         | N/A                                                                        |
| `stages`                                                                   | [models.SearchJobStageConfig](../models/searchjobstageconfig.md)[]         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | [models.SearchJobStatus](../models/searchjobstatus.md)                     | :heavy_check_mark:                                                         | N/A                                                                        |
| `tableConfig`                                                              | [models.TableViewSettings](../models/tableviewsettings.md)                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `targetEventTime`                                                          | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeCompleted`                                                            | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeCreated`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `timeStarted`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeToFirstByte`                                                          | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalBytesScanned`                                                        | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `totalEventCount`                                                          | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | [models.SearchJobType](../models/searchjobtype.md)                         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `usageGroupId`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `usageMetrics`                                                             | [models.SearchAuditMetrics](../models/searchauditmetrics.md)               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `user`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |