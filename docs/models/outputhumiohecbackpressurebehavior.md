# OutputHumioHecBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputHumioHecBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputHumioHecBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```