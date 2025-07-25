# BackpressureBehaviorStatsdExt

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorStatsdExt } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorStatsdExt = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```