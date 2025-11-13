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
      type: "exabeam",
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
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      objectACL: "private",
      storageClass: "STANDARD",
      reuseConnections: true,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: true,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      maxFileSizeMB: 10,
      encodedConfiguration: "<value>",
      collectorInstanceId: "<id>",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "kosher about exalted",
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