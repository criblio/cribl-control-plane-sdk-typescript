# BackpressureBehaviorSentinelOneAiSiem

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSentinelOneAiSiem } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorSentinelOneAiSiem = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```