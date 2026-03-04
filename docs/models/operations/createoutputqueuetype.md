# CreateOutputQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { CreateOutputQueueType } from "cribl-control-plane/models/operations";

let value: CreateOutputQueueType = "standard";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "fifo" | Unrecognized<string>
```