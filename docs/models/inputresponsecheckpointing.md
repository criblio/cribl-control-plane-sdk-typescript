# InputResponseCheckpointing

## Example Usage

```typescript
import { InputResponseCheckpointing } from "cribl-control-plane/models";

let value: InputResponseCheckpointing = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkpointStoreType`                                                                                                                                       | [models.InputResponseCheckpointStore](../models/inputresponsecheckpointstore.md)                                                                            | :heavy_minus_sign:                                                                                                                                          | The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position). |
| `blobStore`                                                                                                                                                 | [models.InputResponseAzureBlobStorage](../models/inputresponseazureblobstorage.md)                                                                          | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |