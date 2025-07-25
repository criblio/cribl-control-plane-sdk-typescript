# OutputSnsBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSnsBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSnsBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```