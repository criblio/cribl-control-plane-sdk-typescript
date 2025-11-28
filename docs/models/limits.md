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
  maxDimensionValueSize: 7487.95,
  maxMetrics: 9664.43,
  maxPQSize: "<value>",
  maxReconnectInterval: "<value>",
  metricsDirectory: "<value>",
  metricsDropList: [
    "<value 1>",
    "<value 2>",
  ],
  metricsFieldsBlacklist: [],
  metricsGCPeriod: "<value>",
  metricsMaxCardinality: 4885.43,
  metricsMaxDiskSpace: "<value>",
  metricsNeverDropList: [],
  metricsWorkerIdBlacklist: [
    "<value 1>",
  ],
  minFreeSpace: "<value>",
  minReconnectInterval: "<value>",
  netFlowTemplateFlushInterval: 2382.33,
  randomReconnectInterval: "<value>",
  samples: {
    maxSize: "<value>",
  },
  workerMaxMetrics: 3031.19,
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
| `maxDimensionValueSize`                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxMetrics`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxPQSize`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxReconnectInterval`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsDirectory`                                                       | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsDropList`                                                        | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsFieldsBlacklist`                                                 | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsGCPeriod`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsMaxCardinality`                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsMaxDiskSpace`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricsNeverDropList`                                                   | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricsWorkerIdBlacklist`                                               | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `minFreeSpace`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `minReconnectInterval`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `netFlowTemplateFlushInterval`                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `randomReconnectInterval`                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `samples`                                                                | [models.Samples](../models/samples.md)                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `workerMaxMetrics`                                                       | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |