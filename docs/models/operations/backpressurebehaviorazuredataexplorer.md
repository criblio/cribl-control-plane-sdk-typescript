# BackpressureBehaviorAzureDataExplorer

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorAzureDataExplorer } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorAzureDataExplorer = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```