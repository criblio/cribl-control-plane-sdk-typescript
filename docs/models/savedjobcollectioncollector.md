# SavedJobCollectionCollector

## Example Usage

```typescript
import { SavedJobCollectionCollector } from "cribl-control-plane/models";

let value: SavedJobCollectionCollector = {
  type: "<value>",
  conf: {
    authType: "manual",
    connectionString: "<value>",
    type: "azure_blob",
    outputName: "<value>",
    containerName: "<value>",
    path: "/usr/local/bin",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: true,
    includeMetadata: true,
    includeTags: true,
    maxBatchSize: 10,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    textSecret: "<value>",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    clientTextSecret: "<value>",
    endpointSuffix: "<value>",
    azureCloud: "<value>",
    certificate: {
      certificateName: "<value>",
    },
  },
  encoding: "<value>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The type of collector to run                                                                                                                              |
| `conf`                                                                                                                                                    | *models.CollectorConf*                                                                                                                                    | :heavy_check_mark:                                                                                                                                        | Collector configuration                                                                                                                                   |
| `destructive`                                                                                                                                             | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Delete any files collected (where applicable)                                                                                                             |
| `encoding`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Character encoding to use when parsing ingested data. When not set, @{product} will default to UTF-8 but may incorrectly interpret multi-byte characters. |