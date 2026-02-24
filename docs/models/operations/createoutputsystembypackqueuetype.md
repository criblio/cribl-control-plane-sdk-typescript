# CreateOutputSystemByPackQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { CreateOutputSystemByPackQueueType } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackQueueType = "fifo";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```