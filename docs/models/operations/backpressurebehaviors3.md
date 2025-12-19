# BackpressureBehaviorS3

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorS3 } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorS3 = "block";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | Unrecognized<string>
```