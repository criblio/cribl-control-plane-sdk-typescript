# BackpressureBehaviorElastic

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorElastic } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorElastic = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```