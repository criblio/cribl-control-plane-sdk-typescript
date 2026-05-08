# CreateInputCheckpointStore

The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position).

## Example Usage

```typescript
import { CreateInputCheckpointStore } from "cribl-control-plane/models/operations";

let value: CreateInputCheckpointStore = "azureBlob";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "azureBlob" | Unrecognized<string>
```