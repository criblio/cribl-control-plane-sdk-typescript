# QueueFullBehaviorSqs

How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.

## Example Usage

```typescript
import { QueueFullBehaviorSqs } from "cribl-control-plane/models/operations";

let value: QueueFullBehaviorSqs = "drop";
```

## Values

```typescript
"block" | "drop"
```