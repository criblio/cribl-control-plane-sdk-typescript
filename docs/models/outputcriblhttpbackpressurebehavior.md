# OutputCriblHttpBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCriblHttpBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCriblHttpBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```