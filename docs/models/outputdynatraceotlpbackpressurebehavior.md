# OutputDynatraceOtlpBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputDynatraceOtlpBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputDynatraceOtlpBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```