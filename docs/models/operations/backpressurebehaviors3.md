# BackpressureBehaviorS3

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorS3 } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorS3 = "block";
```

## Values

```typescript
"block" | "drop"
```