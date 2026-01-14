# CollectorAzureBlob

AzureBlob collector configuration

## Example Usage

```typescript
import { CollectorAzureBlob } from "cribl-control-plane/models";

let value: CollectorAzureBlob = {
  type: "azure_blob",
  conf: {
    authType: "clientCert",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    certificate: {
      certificateName: "<value>",
    },
    azureCloud: "<value>",
    endpointSuffix: "<value>",
    outputName: "<value>",
    containerName: "<value>",
    path: "/Applications",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: false,
    includeMetadata: false,
    includeTags: false,
    maxBatchSize: 2877.09,
    parquetChunkSizeMB: 3385.81,
    parquetChunkDownloadTimeout: 2527.71,
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `type`                          | *"azure_blob"*                  | :heavy_check_mark:              | Collector type                  |
| `conf`                          | *models.AzureBlobCollectorConf* | :heavy_check_mark:              | N/A                             |