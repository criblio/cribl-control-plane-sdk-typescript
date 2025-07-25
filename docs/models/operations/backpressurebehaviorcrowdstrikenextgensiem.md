# BackpressureBehaviorCrowdstrikeNextGenSiem

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorCrowdstrikeNextGenSiem } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorCrowdstrikeNextGenSiem = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```