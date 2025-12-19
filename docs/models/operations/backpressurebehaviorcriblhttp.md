# BackpressureBehaviorCriblHTTP

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorCriblHTTP } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorCriblHTTP = "queue";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```