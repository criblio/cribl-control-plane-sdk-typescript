# OutputServiceNowBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputServiceNowBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputServiceNowBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```