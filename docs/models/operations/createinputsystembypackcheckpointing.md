# CreateInputSystemByPackCheckpointing

## Example Usage

```typescript
import { CreateInputSystemByPackCheckpointing } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCheckpointing = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkpointStoreType`                                                                                                                                       | [operations.CreateInputSystemByPackCheckpointStore](../../models/operations/createinputsystembypackcheckpointstore.md)                                      | :heavy_minus_sign:                                                                                                                                          | The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position). |
| `blobStore`                                                                                                                                                 | [operations.CreateInputSystemByPackAzureBlobStorage](../../models/operations/createinputsystembypackazureblobstorage.md)                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |