# BackpressureBehaviorAzureBlob

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorAzureBlob } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorAzureBlob = "drop";
```

## Values

```typescript
"block" | "drop"
```