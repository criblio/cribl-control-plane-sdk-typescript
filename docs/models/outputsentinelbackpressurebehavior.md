# OutputSentinelBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSentinelBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSentinelBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```