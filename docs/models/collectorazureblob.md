# CollectorAzureBlob

AzureBlob collector configuration

## Example Usage

```typescript
import { CollectorAzureBlob } from "cribl-control-plane/models";

let value: CollectorAzureBlob = {
  type: "azure_blob",
  conf: {
    outputName: "<value>",
    containerName: "<value>",
    path: "/var",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"azure_blob"*                                                       | :heavy_check_mark:                                                   | Collector type: azure_blob                                           |
| `conf`                                                               | [models.AzureBlobCollectorConf](../models/azureblobcollectorconf.md) | :heavy_check_mark:                                                   | N/A                                                                  |