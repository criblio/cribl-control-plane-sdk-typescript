# OutputWebhookBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputWebhookBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputWebhookBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```