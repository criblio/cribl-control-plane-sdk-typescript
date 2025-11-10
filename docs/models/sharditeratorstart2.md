# ShardIteratorStart2

Location at which to start reading a shard for the first time

## Example Usage

```typescript
import { ShardIteratorStart2 } from "cribl-control-plane/models";

let value: ShardIteratorStart2 = "LATEST";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TRIM_HORIZON" | "LATEST" | Unrecognized<string>
```