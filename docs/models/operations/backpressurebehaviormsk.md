# BackpressureBehaviorMsk

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorMsk } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorMsk = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```