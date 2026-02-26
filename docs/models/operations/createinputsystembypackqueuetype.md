# CreateInputSystemByPackQueueType

The queue type used (or created)

## Example Usage

```typescript
import { CreateInputSystemByPackQueueType } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackQueueType = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```