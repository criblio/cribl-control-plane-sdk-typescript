# BackpressureBehaviorKinesis

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorKinesis } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorKinesis = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```