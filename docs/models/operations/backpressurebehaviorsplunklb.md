# BackpressureBehaviorSplunkLb

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSplunkLb } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSplunkLb = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```