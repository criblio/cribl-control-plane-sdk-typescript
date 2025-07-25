# BackpressureBehaviorSignalfx

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSignalfx } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSignalfx = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```