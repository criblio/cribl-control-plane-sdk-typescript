# OutputNewrelicEventsBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputNewrelicEventsBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputNewrelicEventsBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```