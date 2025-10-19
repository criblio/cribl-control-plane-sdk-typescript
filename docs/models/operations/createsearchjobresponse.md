# CreateSearchJobResponse

a list of SearchJob objects

## Example Usage

```typescript
import { CreateSearchJobResponse } from "cribl-control-plane/models/operations";

let value: CreateSearchJobResponse = {
  count: 353498,
  items: [
    {
      accelerated: true,
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
      disableNotifications: true,
      displayUsername: "<value>",
      earliest: "<value>",
      earliestEpoch: 2762.24,
      errorStateConfig: {
        coordinated: true,
        errorMessages: [
          "<value 1>",
          "<value 2>",
        ],
      },
      group: "<value>",
      id: "<id>",
      isPrivate: false,
      latest: "<value>",
      latestEpoch: 70.56,
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
      numEventsAfter: 6152.03,
      numEventsBefore: 3769.25,
      query: "<value>",
      queryWithMacrosResolved: "<value>",
      sampleRate: 2824.84,
      savedQueryName: "<value>",
      searchParameterDeclarations: [
        {
          defaultValue: true,
          name: "<value>",
          type: "boolean",
        },
      ],
      searchParameterValues: {
        "key": 2884.71,
      },
      setOptions: {
        "key": "<value>",
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
      status: "completed",
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
      targetEventTime: 3273.16,
      timeCompleted: 2098.98,
      timeCreated: 728.82,
      timeStarted: 3053.68,
      timeToFirstByte: 8513.34,
      totalBytesScanned: 3768.19,
      totalEventCount: 7869.34,
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
      user: "Brayan.Schneider63",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `count`                                         | *number*                                        | :heavy_minus_sign:                              | number of items present in the items array      |
| `items`                                         | [models.SearchJob](../../models/searchjob.md)[] | :heavy_minus_sign:                              | N/A                                             |