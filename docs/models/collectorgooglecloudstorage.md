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
    bucket: "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"google_cloud_storage"*                              | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.GoogleCloudStorageCollectorConf*              | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |