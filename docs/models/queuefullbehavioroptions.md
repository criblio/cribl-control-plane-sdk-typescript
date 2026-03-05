# QueueFullBehaviorOptions

How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.

## Example Usage

```typescript
import { QueueFullBehaviorOptions } from "cribl-control-plane/models";

let value: QueueFullBehaviorOptions = "block";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"block" | "drop" | Unrecognized<string>
```