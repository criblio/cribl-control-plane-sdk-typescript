# OutputGoogleChronicleQueueFullBehavior

How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.

## Example Usage

```typescript
import { OutputGoogleChronicleQueueFullBehavior } from "cribl-control-plane/models";

let value: OutputGoogleChronicleQueueFullBehavior = "block";
```

## Values

```typescript
"block" | "drop"
```