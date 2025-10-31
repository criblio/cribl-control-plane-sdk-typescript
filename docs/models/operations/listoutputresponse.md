# ListOutputResponse

a list of Destination objects

## Example Usage

```typescript
import { ListOutputResponse } from "cribl-control-plane/models/operations";

let value: ListOutputResponse = {
  count: 196251,
  items: [
    {
      id: "<id>",
      type: "azure_blob",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      containerName: "<value>",
      createContainer: false,
      destPath: "<value>",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      maxConcurrentFileParts: 1,
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
      authType: "manual",
      storageClass: "Inferred",
      description:
        "ah hence incidentally limited liberalize variable resort unlike",
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
      connectionString: "<value>",
      textSecret: "<value>",
      storageAccountName: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      azureCloud: "<value>",
      endpointSuffix: "<value>",
      clientTextSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |