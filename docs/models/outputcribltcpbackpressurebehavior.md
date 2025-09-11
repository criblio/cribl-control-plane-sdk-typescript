# OutputCriblTcpBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCriblTcpBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCriblTcpBackpressureBehavior = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```