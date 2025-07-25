# BackpressureBehaviorConfluentCloud

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorConfluentCloud } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorConfluentCloud = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```