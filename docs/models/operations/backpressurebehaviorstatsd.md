# BackpressureBehaviorStatsd

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorStatsd } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorStatsd = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```