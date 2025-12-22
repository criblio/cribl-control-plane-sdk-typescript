# BackpressureBehaviorCriblSearchEngine

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorCriblSearchEngine } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorCriblSearchEngine = "queue";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```