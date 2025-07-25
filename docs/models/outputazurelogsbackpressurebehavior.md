# OutputAzureLogsBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputAzureLogsBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputAzureLogsBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```