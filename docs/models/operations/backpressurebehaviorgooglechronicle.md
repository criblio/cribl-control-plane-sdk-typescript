# BackpressureBehaviorGoogleChronicle

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorGoogleChronicle } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorGoogleChronicle = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```