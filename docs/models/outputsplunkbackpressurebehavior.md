# OutputSplunkBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSplunkBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSplunkBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```