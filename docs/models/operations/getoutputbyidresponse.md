# GetOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { GetOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: GetOutputByIdResponse = {
  count: 860587,
  items: [
    {
      id: "<id>",
      type: "s3",
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
      bucket: "<value>",
      region: "<value>",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      destPath: "",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr:
        "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${
        __compression === "gzip" ? ".gz" : ""
      }`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      description: "exactly very midst phew",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
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