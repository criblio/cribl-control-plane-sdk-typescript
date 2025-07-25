# BackpressureBehaviorPrometheus

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorPrometheus } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorPrometheus = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```