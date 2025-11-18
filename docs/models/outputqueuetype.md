# OutputQueueType

The queue type used (or created). Defaults to Standard.

## Example Usage

```typescript
import { OutputQueueType } from "cribl-control-plane/models";

let value: OutputQueueType = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```