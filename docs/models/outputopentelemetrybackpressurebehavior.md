# OutputOpenTelemetryBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputOpenTelemetryBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputOpenTelemetryBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```