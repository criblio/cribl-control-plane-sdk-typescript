# BackpressureBehaviorNewrelicEvents

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorNewrelicEvents } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorNewrelicEvents = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```