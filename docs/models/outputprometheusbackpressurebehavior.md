# OutputPrometheusBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputPrometheusBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputPrometheusBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```