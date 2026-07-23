# InputResponseCheckpointing

## Example Usage

```typescript
import { InputResponseCheckpointing } from "cribl-control-plane/models";

let value: InputResponseCheckpointing = {
  blobStore: {
    containerName: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `blobStore`                                                                        | [models.InputResponseAzureBlobStorage](../models/inputresponseazureblobstorage.md) | :heavy_check_mark:                                                                 | Azure Blob Storage                                                                 |