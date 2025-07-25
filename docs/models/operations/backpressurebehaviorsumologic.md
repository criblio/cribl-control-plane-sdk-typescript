# BackpressureBehaviorSumoLogic

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSumoLogic } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSumoLogic = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```