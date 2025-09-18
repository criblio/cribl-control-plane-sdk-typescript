# OutputSqsQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { OutputSqsQueueType } from "cribl-control-plane/models";

let value: OutputSqsQueueType = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```