# OutputConfluentCloudBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputConfluentCloudBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputConfluentCloudBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```