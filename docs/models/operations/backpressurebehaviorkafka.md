# BackpressureBehaviorKafka

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorKafka } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorKafka = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```