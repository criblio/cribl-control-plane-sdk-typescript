# CreateInputShardIteratorStart

Location at which to start reading a shard for the first time

## Example Usage

```typescript
import { CreateInputShardIteratorStart } from "cribl-control-plane/models/operations";

let value: CreateInputShardIteratorStart = "LATEST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TRIM_HORIZON" | "LATEST" | Unrecognized<string>
```