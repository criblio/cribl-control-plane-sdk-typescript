# BackpressureBehavior131

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehavior131 } from "cribl-control-plane/models/operations";

let value: BackpressureBehavior131 = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```