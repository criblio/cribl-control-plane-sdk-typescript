# OutputXsiamBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputXsiamBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputXsiamBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```