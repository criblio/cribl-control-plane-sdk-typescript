# BackpressureBehaviorSentinel

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSentinel } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSentinel = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```