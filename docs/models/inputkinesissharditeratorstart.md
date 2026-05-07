# InputKinesisShardIteratorStart

Location at which to start reading a shard for the first time

## Example Usage

```typescript
import { InputKinesisShardIteratorStart } from "cribl-control-plane/models";

let value: InputKinesisShardIteratorStart = "TRIM_HORIZON";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TRIM_HORIZON" | "LATEST" | Unrecognized<string>
```