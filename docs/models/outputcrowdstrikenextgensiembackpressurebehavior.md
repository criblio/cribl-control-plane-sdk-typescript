# OutputCrowdstrikeNextGenSiemBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCrowdstrikeNextGenSiemBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCrowdstrikeNextGenSiemBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```