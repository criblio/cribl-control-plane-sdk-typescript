# BackpressureBehaviorOptionsBlockDrop

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorOptionsBlockDrop } from "cribl-control-plane/models";

let value: BackpressureBehaviorOptionsBlockDrop = "drop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"block" | "drop" | Unrecognized<string>
```