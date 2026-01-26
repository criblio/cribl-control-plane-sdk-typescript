# CreateInputQueueType

The queue type used (or created)

## Example Usage

```typescript
import { CreateInputQueueType } from "cribl-control-plane/models/operations";

let value: CreateInputQueueType = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```