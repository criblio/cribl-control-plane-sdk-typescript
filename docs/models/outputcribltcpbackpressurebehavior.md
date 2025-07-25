# OutputCriblTcpBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCriblTcpBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCriblTcpBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```