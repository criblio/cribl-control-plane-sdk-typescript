# UpdateOutputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateOutputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  output: {
    id: "<id>",
    type: "filesystem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    destPath: "<value>",
    stagePath: "<value>",
    addIdToStagePath: false,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8053.18,
    maxFileOpenTimeSec: 6972.34,
    maxFileIdleTimeSec: 4919.5,
    maxOpenFiles: 4776.93,
    headerLine: "<value>",
    writeHighWaterMark: 669.95,
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
    description: "mysteriously yahoo immense omelet yippee",
    compress: "none",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 3071.31,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: true,
    enablePageChecksum: true,
    emptyDirCleanupSec: 6699.65,
    directoryBatchSize: 4989.97,
    deadletterPath: "<value>",
    maxRetryNum: 6944.66,
    __template_format: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `pack`                                            | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Pack to update.        |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |