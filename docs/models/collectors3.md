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
    parquetChunkSizeMB: 219.36,
    parquetChunkDownloadTimeout: 4909.83,
    region: "<value>",
    path: "/private/var",
    partitioningScheme: "none",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    signatureVersion: "v4",
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2339.05,
    maxBatchSize: 5719.01,
    recurse: "<value>",
    reuseConnections: false,
    rejectUnauthorized: true,
    verifyPermissions: false,
    disableTimeFilter: true,
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *"s3"*                   | :heavy_check_mark:       | Collector type           |
| `conf`                   | *models.S3CollectorConf* | :heavy_check_mark:       | N/A                      |