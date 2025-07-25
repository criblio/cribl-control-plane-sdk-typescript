# BackpressureBehaviorWavefront

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorWavefront } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorWavefront = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```