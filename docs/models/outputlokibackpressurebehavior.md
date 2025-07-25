# OutputLokiBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputLokiBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputLokiBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```