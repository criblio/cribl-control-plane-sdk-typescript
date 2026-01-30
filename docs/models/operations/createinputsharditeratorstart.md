# CreateInputShardIteratorStart

Location at which to start reading a shard for the first time

## Example Usage

```typescript
import { CreateInputShardIteratorStart } from "cribl-control-plane/models/operations";

let value: CreateInputShardIteratorStart = "LATEST";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TRIM_HORIZON" | "LATEST" | Unrecognized<string>
```