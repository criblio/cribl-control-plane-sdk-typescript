# Limits

## Example Usage

```typescript
import { Limits } from "cribl-control-plane/models";

let value: Limits = {
  cpuProfileTTL: "<value>",
  disableMetricsAccessorCache: false,
  edgeMetricsCustomExpression: "<value>",
  edgeMetricsMode: "basic",
  edgeNodesCount: 3590.46,
  enableMetricsPersistence: true,
  enableWorkerPersistence: false,
  eventsMetadataSources: [
    "<value 1>",
  ],
  largeEventsThreshold: "<value>",
  lookupMaxSize: "<value>",
  lookupMaxTotalSize: "<value>",
  maxMetrics: 7487.95,
  maxPQSize: "<value>",
  metricsDirectory: "<value>",
  metricsDropList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metricsFieldsBlacklist: [
    "<value 1>",
  ],
  metricsGCPeriod: "<value>",
  metricsMaxCardinality: 1971.47,
  metricsMaxDiskSpace: "<value>",
  metricsNeverDropList: [
    "<value 1>",
  ],
  metricsWorkerIdBlacklist: [],
  minFreeSpace: "<value>",
  samples: {
    maxSize: "<value>",
  },
  workerMaxMetrics: 4058.84,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cpuProfileTTL`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disableMetricsAccessorCache`                                            | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `edgeMetricsCustomExpression`                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `edgeMetricsMode`                                                        | [models.EdgeHeartbeatMetricsMode](../models/edgeheartbeatmetricsmode.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `edgeNodesCount`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `enableMetricsPersistence`                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `enableWorkerPersistence`                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `eventsMetadataSources`                                                  | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `largeEventsThreshold`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lookupMaxSize`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lookupMaxTotalSize`                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxMetrics`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxPQSize`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsDirectory`                                                       | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsDropList`                                                        | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsFieldsBlacklist`                                                 | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsGCPeriod`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsMaxCardinality`                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsMaxDiskSpace`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsNeverDropList`                                                   | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsWorkerIdBlacklist`                                               | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `minFreeSpace`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `samples`                                                                | [models.Samples](../models/samples.md)                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `workerMaxMetrics`                                                       | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |