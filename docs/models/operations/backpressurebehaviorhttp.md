# BackpressureBehaviorHTTP

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorHTTP } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorHTTP = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```