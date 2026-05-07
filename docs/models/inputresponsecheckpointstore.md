# InputResponseCheckpointStore

The backing store used to persist consumer checkpoints. Select "None" to disable checkpointing (consumers will restart from the configured start position).

## Example Usage

```typescript
import { InputResponseCheckpointStore } from "cribl-control-plane/models";

let value: InputResponseCheckpointStore = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "azureBlob" | Unrecognized<string>
```