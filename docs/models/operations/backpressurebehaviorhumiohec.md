# BackpressureBehaviorHumioHec

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorHumioHec } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorHumioHec = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```