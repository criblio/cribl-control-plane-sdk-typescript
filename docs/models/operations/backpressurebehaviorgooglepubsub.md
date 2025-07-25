# BackpressureBehaviorGooglePubsub

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorGooglePubsub } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorGooglePubsub = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```