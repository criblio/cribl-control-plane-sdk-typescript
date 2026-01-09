# CollectorGoogleCloudStorage

GoogleCloudStorage collector configuration

## Example Usage

```typescript
import { CollectorGoogleCloudStorage } from "cribl-control-plane/models";

let value: CollectorGoogleCloudStorage = {
  type: "google_cloud_storage",
  conf: {
    authType: "secret",
    textSecret: "<value>",
    outputName: "<value>",
    bucket: "<value>",
    path: "/private/tmp",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    disableTimeFilter: false,
    recurse: true,
    maxBatchSize: 10,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`                                   | *"google_cloud_storage"*                 | :heavy_check_mark:                       | Collector type                           |
| `conf`                                   | *models.GoogleCloudStorageCollectorConf* | :heavy_check_mark:                       | N/A                                      |