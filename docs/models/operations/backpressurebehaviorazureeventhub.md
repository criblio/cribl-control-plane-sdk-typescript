# BackpressureBehaviorAzureEventhub

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorAzureEventhub } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorAzureEventhub = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```