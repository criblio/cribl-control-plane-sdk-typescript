# BackpressureBehaviorClickHouse

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorClickHouse } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorClickHouse = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```