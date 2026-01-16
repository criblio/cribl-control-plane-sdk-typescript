# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    id: "<id>",
    type: "databricks",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    destPath: "<value>",
    stagePath: "<value>",
    addIdToStagePath: true,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "raw",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 2630.32,
    maxFileOpenTimeSec: 5830.26,
    maxFileIdleTimeSec: 6237.4,
    maxOpenFiles: 8329.43,
    headerLine: "<value>",
    writeHighWaterMark: 4727.64,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 192.63,
      backoffMultiplier: 5447.21,
      maxBackoffMs: 1266.88,
      jitterPercent: 3342.59,
    },
    workspaceId: "<id>",
    scope: "<value>",
    clientId: "<id>",
    catalog: "<value>",
    schema: "<value>",
    eventsVolumeName: "<value>",
    clientTextSecret: "<value>",
    timeoutSec: 5772.68,
    description: "despite present honestly colonialism jealously apt dual",
    compress: "none",
    compressionLevel: "best_speed",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 5540.57,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 7631.6,
    directoryBatchSize: 4881.59,
    deadletterPath: "<value>",
    maxRetryNum: 6381.1,
    __template_format: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |