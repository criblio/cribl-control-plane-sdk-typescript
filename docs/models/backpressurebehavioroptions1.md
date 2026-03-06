# BackpressureBehaviorOptions1

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorOptions1 } from "cribl-control-plane/models";

let value: BackpressureBehaviorOptions1 = "block";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"block" | "drop" | Unrecognized<string>
```