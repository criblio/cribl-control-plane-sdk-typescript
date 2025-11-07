# DeleteOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { DeleteOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteOutputByIdResponse = {
  count: 62425,
  items: [
    {
      id: "<id>",
      type: "databricks",
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
      ],
      destPath: "",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr:
        "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${
        __compression === "gzip" ? ".gz" : ""
      }`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      workspaceId: "<id>",
      scope: "all-apis",
      clientId: "<id>",
      catalog: "main",
      schema: "external",
      eventsVolumeName: "events",
      clientTextSecret: "<value>",
      description: "fleck unethically upward",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |