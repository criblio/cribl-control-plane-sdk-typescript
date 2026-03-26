# OutputSqsQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { OutputSqsQueueType } from "cribl-control-plane/models";

let value: OutputSqsQueueType = "standard";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "fifo" | Unrecognized<string>
```