# BackpressureBehaviorDlS3

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorDlS3 } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorDlS3 = "drop";
```

## Values

```typescript
"block" | "drop"
```