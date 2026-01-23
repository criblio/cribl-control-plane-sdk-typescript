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
    disableTimeFilter: true,
    recurse: false,
    maxBatchSize: 60.67,
    parquetChunkSizeMB: 2920.25,
    parquetChunkDownloadTimeout: 430.44,
  },
  destructive: false,
  encoding: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"google_cloud_storage"*                              | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.GoogleCloudStorageCollectorConf*              | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |