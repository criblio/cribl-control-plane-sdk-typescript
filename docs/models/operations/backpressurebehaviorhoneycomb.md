# BackpressureBehaviorHoneycomb

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorHoneycomb } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorHoneycomb = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```