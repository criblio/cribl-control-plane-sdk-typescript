# OutputSignalfxBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSignalfxBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSignalfxBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```