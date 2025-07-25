# BackpressureBehaviorDynatraceHTTP

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorDynatraceHTTP = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```