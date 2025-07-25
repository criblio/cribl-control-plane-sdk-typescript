# BackpressureBehaviorAzureLogs

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorAzureLogs } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorAzureLogs = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```