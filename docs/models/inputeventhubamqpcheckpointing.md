# InputEventhubAmqpCheckpointing

## Example Usage

```typescript
import { InputEventhubAmqpCheckpointing } from "cribl-control-plane/models";

let value: InputEventhubAmqpCheckpointing = {
  blobStore: {
    containerName: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `blobStore`                                                                                | [models.InputEventhubAmqpAzureBlobStorage](../models/inputeventhubamqpazureblobstorage.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |