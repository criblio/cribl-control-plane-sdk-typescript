# Checkpointing

## Example Usage

```typescript
import { Checkpointing } from "cribl-control-plane/models";

let value: Checkpointing = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkpointStoreType`                                                                                                                                       | [models.CheckpointStore](../models/checkpointstore.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                          | The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position). |
| `blobStore`                                                                                                                                                 | [models.AzureBlobStorage](../models/azureblobstorage.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |