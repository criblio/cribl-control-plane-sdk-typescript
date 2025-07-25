# OutputNewrelicBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputNewrelicBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputNewrelicBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```