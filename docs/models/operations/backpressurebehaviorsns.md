# BackpressureBehaviorSns

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSns } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSns = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```