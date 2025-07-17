# QueueType

The queue type used (or created)

## Example Usage

```typescript
import { QueueType } from "cribl-control-plane/models";

let value: QueueType = "fifo";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```