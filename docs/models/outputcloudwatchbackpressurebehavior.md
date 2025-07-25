# OutputCloudwatchBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputCloudwatchBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputCloudwatchBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```