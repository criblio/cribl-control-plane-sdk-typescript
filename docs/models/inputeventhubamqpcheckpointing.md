# InputEventhubAmqpCheckpointing

## Example Usage

```typescript
import { InputEventhubAmqpCheckpointing } from "cribl-control-plane/models";

let value: InputEventhubAmqpCheckpointing = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkpointStoreType`                                                                                                                                       | [models.InputEventhubAmqpCheckpointStore](../models/inputeventhubamqpcheckpointstore.md)                                                                    | :heavy_minus_sign:                                                                                                                                          | The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position). |
| `blobStore`                                                                                                                                                 | [models.InputEventhubAmqpAzureBlobStorage](../models/inputeventhubamqpazureblobstorage.md)                                                                  | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |