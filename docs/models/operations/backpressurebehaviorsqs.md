# BackpressureBehaviorSqs

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSqs } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSqs = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```