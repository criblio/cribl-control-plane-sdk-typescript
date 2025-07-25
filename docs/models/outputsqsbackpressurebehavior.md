# OutputSqsBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSqsBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSqsBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```