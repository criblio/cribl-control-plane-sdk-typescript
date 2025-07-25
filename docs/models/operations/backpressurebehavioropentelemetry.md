# BackpressureBehaviorOpenTelemetry

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorOpenTelemetry } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorOpenTelemetry = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```