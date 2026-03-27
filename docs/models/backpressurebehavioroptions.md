# BackpressureBehaviorOptions

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorOptions } from "cribl-control-plane/models";

let value: BackpressureBehaviorOptions = "drop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```