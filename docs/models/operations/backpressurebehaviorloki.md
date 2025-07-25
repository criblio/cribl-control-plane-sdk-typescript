# BackpressureBehaviorLoki

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorLoki } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorLoki = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```