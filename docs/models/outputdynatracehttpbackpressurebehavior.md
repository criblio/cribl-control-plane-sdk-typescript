# OutputDynatraceHttpBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputDynatraceHttpBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputDynatraceHttpBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```