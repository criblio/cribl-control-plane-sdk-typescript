# CollectorGoogleCloudStorage

GoogleCloudStorage collector configuration

## Example Usage

```typescript
import { CollectorGoogleCloudStorage } from "cribl-control-plane/models";

let value: CollectorGoogleCloudStorage = {
  type: "google_cloud_storage",
  conf: {
    outputName: "<value>",
    bucket: "<value>",
    path: "/var/tmp",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"google_cloud_storage"*                                                               | :heavy_check_mark:                                                                     | Collector type: google_cloud_storage                                                   |
| `conf`                                                                                 | [models.GoogleCloudStorageCollectorConf](../models/googlecloudstoragecollectorconf.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |