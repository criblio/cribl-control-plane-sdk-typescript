# CreateOutputSystemByPackQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { CreateOutputSystemByPackQueueType } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackQueueType = "fifo";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "fifo" | Unrecognized<string>
```