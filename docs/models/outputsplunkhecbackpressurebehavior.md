# OutputSplunkHecBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSplunkHecBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSplunkHecBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```