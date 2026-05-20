# OutputResponseQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { OutputResponseQueueType } from "cribl-control-plane/models";

let value: OutputResponseQueueType = "standard";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "fifo" | Unrecognized<string>
```