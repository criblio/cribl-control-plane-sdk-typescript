# OutputSentinelOneAiSiemBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSentinelOneAiSiemBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSentinelOneAiSiemBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```