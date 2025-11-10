# ShardIteratorStart6

Location at which to start reading a shard for the first time

## Example Usage

```typescript
import { ShardIteratorStart6 } from "cribl-control-plane/models";

let value: ShardIteratorStart6 = "LATEST";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TRIM_HORIZON" | "LATEST" | Unrecognized<string>
```