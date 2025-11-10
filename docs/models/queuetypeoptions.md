# QueueTypeOptions

The queue type used (or created)

## Example Usage

```typescript
import { QueueTypeOptions } from "cribl-control-plane/models";

let value: QueueTypeOptions = "fifo";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "fifo" | Unrecognized<string>
```