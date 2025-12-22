# BackpressureBehaviorAzureEventhub

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorAzureEventhub } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorAzureEventhub = "queue";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```