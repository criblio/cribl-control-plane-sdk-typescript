# OutputDatadogBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputDatadogBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputDatadogBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```