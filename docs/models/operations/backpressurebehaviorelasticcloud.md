# BackpressureBehaviorElasticCloud

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorElasticCloud } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorElasticCloud = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```