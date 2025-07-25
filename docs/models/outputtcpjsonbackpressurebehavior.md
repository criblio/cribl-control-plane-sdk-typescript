# OutputTcpjsonBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputTcpjsonBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputTcpjsonBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```