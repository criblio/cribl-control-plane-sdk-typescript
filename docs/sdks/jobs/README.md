# Jobs
(*search.jobs*)

## Overview

### Available Operations

* [create](#create) - Create a new search job

## create

Create a new search job

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSearchJob" method="post" path="/search/jobs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.jobs.create({
    accelerated: false,
    aliasOfOriginalJobId: "<id>",
    chartConfig: {
      applyThreshold: true,
      axis: {
        xAxis: "<value>",
        yAxis: [
          "<value 1>",
          "<value 2>",
        ],
        yAxisExcluded: [
          "<value 1>",
        ],
      },
      color: "lime",
      colorPalette: 1185.65,
      colorPaletteReversed: false,
      colorThresholds: {
        thresholds: [
          {
            color: "silver",
            threshold: 140.04,
          },
        ],
      },
      customData: {
        connectNulls: "<value>",
        dataFields: [
          "<value 1>",
          "<value 2>",
        ],
        isPointColor: true,
        limitToTopN: 7391.45,
        lines: false,
        nameField: "<value>",
        pointColorPalette: 8976.86,
        pointColorPaletteReversed: false,
        pointScale: 4169.02,
        pointScaleDataField: "<value>",
        seriesCount: 6435.95,
        splitBy: "<value>",
        stack: false,
        summarizeOthers: true,
        trellis: false,
      },
      decimals: 6777.04,
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
        pointScale: 5924.41,
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
            opacity: 5361.84,
            shadowBlur: 5481.86,
            shadowColor: "<value>",
            shadowOffsetX: 8299.93,
            shadowOffsetY: 5023.46,
          },
          color: "olive",
          data: [
            {},
          ],
          map: "<value>",
          name: "<value>",
          type: "area",
          yAxisField: "<value>",
        },
      ],
      seriesInfo: {
        "key": "map",
      },
      shouldApplyUserChartSettings: false,
      style: false,
      suffix: "<value>",
      type: "<value>",
      xAxis: {
        dataField: "<value>",
        inverse: true,
        labelInterval: "<value>",
        labelOrientation: 9759.25,
        name: "<value>",
        offset: 9136.96,
        position: "<value>",
        type: "<value>",
      },
      yAxis: {
        dataField: [
          "<value 1>",
        ],
        interval: 6216.81,
        max: 1587.99,
        min: 3943.41,
        position: "<value>",
        scale: "<value>",
        splitLine: false,
        type: "<value>",
      },
    },
    compatibilityChecks: {
      datatypes: false,
      stageIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    completionInfo: "<value>",
    context: "<value>",
    correlationId: "<id>",
    cpuMetrics: {
      billableCPUSeconds: 2389.99,
      executorsCPUSeconds: {
        "key": 9873.22,
      },
      totalCPUSeconds: 17.99,
      totalExecCPUSeconds: 6284.95,
    },
    datatypeOverrides: {
      breakerRulesets: [
        {
          id: "<id>",
          description: "boohoo tomorrow daddy near phew crank innocently exhausted",
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
      disableBreakers: false,
    },
    disableNotifications: false,
    displayUsername: "<value>",
    earliest: 5397.97,
    earliestEpoch: 5254.63,
    errorStateConfig: {
      coordinated: false,
      errorMessages: [],
    },
    group: "<value>",
    id: "<id>",
    isPrivate: false,
    latest: 7604.97,
    latestEpoch: 1956.27,
    metadata: {
      arguments: {
        "key": [
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
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
          },
        ],
        "key2": [
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
      },
      computeTypes: {
        v1: 743.66,
        v2: 69.38,
        lakehouse: 2944.95,
      },
      datasets: {
        "key": 5835.17,
        "key1": 25.06,
      },
      functions: {
        "key": 5994.2,
        "key1": 9986.22,
        "key2": 2057.77,
      },
      operators: {
        "key": 9427.4,
        "key1": 1328.67,
        "key2": 9572.64,
      },
      providerTypes: {
        "key": 4692.87,
        "key1": 1947.58,
      },
      providers: {
        "key": 4559.78,
        "key1": 8394.39,
        "key2": 2333.48,
      },
    },
    notebookId: "<id>",
    numEventsAfter: 2095.17,
    numEventsBefore: 2739.13,
    query: "<value>",
    queryWithMacrosResolved: "<value>",
    sampleRate: 454.08,
    savedQueryName: "<value>",
    searchParameterDeclarations: [
      {
        defaultValue: "<value>",
        name: "<value>",
        type: "number",
      },
    ],
    searchParameterValues: {
      "key": true,
    },
    setOptions: {
      "key": 3958.46,
    },
    stages: [
      {
        cacheStatusByDatasetId: {
          "key": {
            usedCache: true,
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
          canComputeMetadataDistributively: true,
          datasets: [],
          hasSendOperator: true,
          logicalPlans: {
            combined: {
              "key": [
                {
                  isPreviewableOperation: true,
                  type: "filter",
                },
              ],
              "key1": [],
            },
            coordinated: {
              isPreviewableOperation: true,
              type: "dedup",
            },
            federated: {
              isPreviewableOperation: true,
              type: "pivot",
            },
          },
          orderedFieldNames: [],
          pipelines: {
            combined: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
            coordinated: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
            federated: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
          },
          referencedColumnPaths: [
            [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          ],
          searchTerms: [],
          sortFields: [
            {
              direction: "ascending",
              fieldName: "<value>",
              nullPosition: "nullsLast",
            },
          ],
          useFormattedVisualization: true,
        },
        status: "running",
        subQueryText: "<value>",
      },
    ],
    status: "completed",
    tableConfig: {
      columnFilterSettings: {
        contains: {
          "key": "<value>",
        },
      },
      columnFormatSettings: {
        palette: {
          "key": "<value>",
        },
        precision: {
          "key": "<value>",
        },
        prefix: {
          "key": "<value>",
          "key1": "<value>",
        },
        suffix: {
          "key": "<value>",
        },
      },
      columnOrderSettings: {
        order: {
          "key": "<value>",
        },
      },
      columnSortSettings: {
        sort: {
          "key": "<value>",
        },
      },
      eventDetailsPanel: false,
      eventTableFields: [
        "<value 1>",
        "<value 2>",
      ],
      rowNumberColumnWidth: 435.17,
      showColumnTotals: true,
      showColumnTotalsPinned: false,
      showRowNumbers: false,
      showRowTotals: false,
      showRowTotalsPinned: true,
      wrapCells: false,
    },
    targetEventTime: 705.04,
    timeCompleted: 6359.11,
    timeCreated: 4023.22,
    timeStarted: 8231.48,
    timeToFirstByte: 6869.03,
    totalBytesScanned: 701.61,
    totalEventCount: 9257.01,
    type: "scheduled",
    usageGroupId: "<id>",
    usageMetrics: {
      bytesIn: 4960.75,
      bytesOut: 9231.92,
      eventsIn: 5037.87,
      eventsOut: 6581.9,
      objects: {
        discovered: 8768.62,
        scanned: 2490.57,
        skipped: 3273.37,
      },
      tasks: {
        largeFileTaskCount: 1043.86,
        standardTaskCount: 6922.38,
      },
      time: {
        queuedSec: 4270.1,
        runningSec: 3965.86,
        taskCompletionTotalSec: 446.05,
        taskReceivingTotalSec: 9309.24,
      },
    },
    user: "Jace.Kub54",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { searchJobsCreate } from "cribl-control-plane/funcs/searchJobsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchJobsCreate(criblControlPlane, {
    accelerated: false,
    aliasOfOriginalJobId: "<id>",
    chartConfig: {
      applyThreshold: true,
      axis: {
        xAxis: "<value>",
        yAxis: [
          "<value 1>",
          "<value 2>",
        ],
        yAxisExcluded: [
          "<value 1>",
        ],
      },
      color: "lime",
      colorPalette: 1185.65,
      colorPaletteReversed: false,
      colorThresholds: {
        thresholds: [
          {
            color: "silver",
            threshold: 140.04,
          },
        ],
      },
      customData: {
        connectNulls: "<value>",
        dataFields: [
          "<value 1>",
          "<value 2>",
        ],
        isPointColor: true,
        limitToTopN: 7391.45,
        lines: false,
        nameField: "<value>",
        pointColorPalette: 8976.86,
        pointColorPaletteReversed: false,
        pointScale: 4169.02,
        pointScaleDataField: "<value>",
        seriesCount: 6435.95,
        splitBy: "<value>",
        stack: false,
        summarizeOthers: true,
        trellis: false,
      },
      decimals: 6777.04,
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
        pointScale: 5924.41,
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
            opacity: 5361.84,
            shadowBlur: 5481.86,
            shadowColor: "<value>",
            shadowOffsetX: 8299.93,
            shadowOffsetY: 5023.46,
          },
          color: "olive",
          data: [
            {},
          ],
          map: "<value>",
          name: "<value>",
          type: "area",
          yAxisField: "<value>",
        },
      ],
      seriesInfo: {
        "key": "map",
      },
      shouldApplyUserChartSettings: false,
      style: false,
      suffix: "<value>",
      type: "<value>",
      xAxis: {
        dataField: "<value>",
        inverse: true,
        labelInterval: "<value>",
        labelOrientation: 9759.25,
        name: "<value>",
        offset: 9136.96,
        position: "<value>",
        type: "<value>",
      },
      yAxis: {
        dataField: [
          "<value 1>",
        ],
        interval: 6216.81,
        max: 1587.99,
        min: 3943.41,
        position: "<value>",
        scale: "<value>",
        splitLine: false,
        type: "<value>",
      },
    },
    compatibilityChecks: {
      datatypes: false,
      stageIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
    completionInfo: "<value>",
    context: "<value>",
    correlationId: "<id>",
    cpuMetrics: {
      billableCPUSeconds: 2389.99,
      executorsCPUSeconds: {
        "key": 9873.22,
      },
      totalCPUSeconds: 17.99,
      totalExecCPUSeconds: 6284.95,
    },
    datatypeOverrides: {
      breakerRulesets: [
        {
          id: "<id>",
          description: "boohoo tomorrow daddy near phew crank innocently exhausted",
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
      disableBreakers: false,
    },
    disableNotifications: false,
    displayUsername: "<value>",
    earliest: 5397.97,
    earliestEpoch: 5254.63,
    errorStateConfig: {
      coordinated: false,
      errorMessages: [],
    },
    group: "<value>",
    id: "<id>",
    isPrivate: false,
    latest: 7604.97,
    latestEpoch: 1956.27,
    metadata: {
      arguments: {
        "key": [
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
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
          },
        ],
        "key2": [
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
      },
      computeTypes: {
        v1: 743.66,
        v2: 69.38,
        lakehouse: 2944.95,
      },
      datasets: {
        "key": 5835.17,
        "key1": 25.06,
      },
      functions: {
        "key": 5994.2,
        "key1": 9986.22,
        "key2": 2057.77,
      },
      operators: {
        "key": 9427.4,
        "key1": 1328.67,
        "key2": 9572.64,
      },
      providerTypes: {
        "key": 4692.87,
        "key1": 1947.58,
      },
      providers: {
        "key": 4559.78,
        "key1": 8394.39,
        "key2": 2333.48,
      },
    },
    notebookId: "<id>",
    numEventsAfter: 2095.17,
    numEventsBefore: 2739.13,
    query: "<value>",
    queryWithMacrosResolved: "<value>",
    sampleRate: 454.08,
    savedQueryName: "<value>",
    searchParameterDeclarations: [
      {
        defaultValue: "<value>",
        name: "<value>",
        type: "number",
      },
    ],
    searchParameterValues: {
      "key": true,
    },
    setOptions: {
      "key": 3958.46,
    },
    stages: [
      {
        cacheStatusByDatasetId: {
          "key": {
            usedCache: true,
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
          canComputeMetadataDistributively: true,
          datasets: [],
          hasSendOperator: true,
          logicalPlans: {
            combined: {
              "key": [
                {
                  isPreviewableOperation: true,
                  type: "filter",
                },
              ],
              "key1": [],
            },
            coordinated: {
              isPreviewableOperation: true,
              type: "dedup",
            },
            federated: {
              isPreviewableOperation: true,
              type: "pivot",
            },
          },
          orderedFieldNames: [],
          pipelines: {
            combined: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
            coordinated: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
            federated: {
              id: "<id>",
              conf: {
                asyncFuncTimeout: 561075,
                description: "unnecessarily unruly abaft",
                streamtags: [
                  "<value 1>",
                  "<value 2>",
                ],
                functions: [
                  {
                    id: "<id>",
                    description: "chip cloudy woot willow till inasmuch",
                    disabled: true,
                    final: true,
                    conf: {},
                    groupId: "<id>",
                  },
                ],
                groups: {
                  "key": {
                    name: "<value>",
                    description: "ha expansion when hmph rigidly carefully welcome whose anenst",
                    disabled: false,
                  },
                },
              },
            },
          },
          referencedColumnPaths: [
            [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          ],
          searchTerms: [],
          sortFields: [
            {
              direction: "ascending",
              fieldName: "<value>",
              nullPosition: "nullsLast",
            },
          ],
          useFormattedVisualization: true,
        },
        status: "running",
        subQueryText: "<value>",
      },
    ],
    status: "completed",
    tableConfig: {
      columnFilterSettings: {
        contains: {
          "key": "<value>",
        },
      },
      columnFormatSettings: {
        palette: {
          "key": "<value>",
        },
        precision: {
          "key": "<value>",
        },
        prefix: {
          "key": "<value>",
          "key1": "<value>",
        },
        suffix: {
          "key": "<value>",
        },
      },
      columnOrderSettings: {
        order: {
          "key": "<value>",
        },
      },
      columnSortSettings: {
        sort: {
          "key": "<value>",
        },
      },
      eventDetailsPanel: false,
      eventTableFields: [
        "<value 1>",
        "<value 2>",
      ],
      rowNumberColumnWidth: 435.17,
      showColumnTotals: true,
      showColumnTotalsPinned: false,
      showRowNumbers: false,
      showRowTotals: false,
      showRowTotalsPinned: true,
      wrapCells: false,
    },
    targetEventTime: 705.04,
    timeCompleted: 6359.11,
    timeCreated: 4023.22,
    timeStarted: 8231.48,
    timeToFirstByte: 6869.03,
    totalBytesScanned: 701.61,
    totalEventCount: 9257.01,
    type: "scheduled",
    usageGroupId: "<id>",
    usageMetrics: {
      bytesIn: 4960.75,
      bytesOut: 9231.92,
      eventsIn: 5037.87,
      eventsOut: 6581.9,
      objects: {
        discovered: 8768.62,
        scanned: 2490.57,
        skipped: 3273.37,
      },
      tasks: {
        largeFileTaskCount: 1043.86,
        standardTaskCount: 6922.38,
      },
      time: {
        queuedSec: 4270.1,
        runningSec: 3965.86,
        taskCompletionTotalSec: 446.05,
        taskReceivingTotalSec: 9309.24,
      },
    },
    user: "Jace.Kub54",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchJobsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SearchJob](../../models/searchjob.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSearchJobResponse](../../models/operations/createsearchjobresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |