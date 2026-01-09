# CollectorS3

S3 collector configuration

## Example Usage

```typescript
import { CollectorS3 } from "cribl-control-plane/models";

let value: CollectorS3 = {
  type: "s3",
  conf: {
    awsAuthenticationMethod: "auto",
    outputName: "<value>",
    bucket: "<value>",
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    region: "<value>",
    path: "/bin",
    partitioningScheme: "none",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    signatureVersion: "v4",
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxBatchSize: 10,
    recurse: "<value>",
    reuseConnections: true,
    rejectUnauthorized: true,
    verifyPermissions: true,
    disableTimeFilter: false,
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *"s3"*                   | :heavy_check_mark:       | Collector type           |
| `conf`                   | *models.S3CollectorConf* | :heavy_check_mark:       | N/A                      |