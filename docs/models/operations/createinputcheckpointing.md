# CreateInputCheckpointing

## Example Usage

```typescript
import { CreateInputCheckpointing } from "cribl-control-plane/models/operations";

let value: CreateInputCheckpointing = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkpointStoreType`                                                                                                                                       | [operations.CreateInputCheckpointStore](../../models/operations/createinputcheckpointstore.md)                                                              | :heavy_minus_sign:                                                                                                                                          | The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position). |
| `blobStore`                                                                                                                                                 | [operations.CreateInputAzureBlobStorage](../../models/operations/createinputazureblobstorage.md)                                                            | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |