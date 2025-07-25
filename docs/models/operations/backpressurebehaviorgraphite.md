# BackpressureBehaviorGraphite

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorGraphite } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorGraphite = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```