# OutputSplunkLbBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSplunkLbBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSplunkLbBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```