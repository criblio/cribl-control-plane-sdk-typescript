# OutputCriblLakeBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCriblLakeBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCriblLakeBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop"
```