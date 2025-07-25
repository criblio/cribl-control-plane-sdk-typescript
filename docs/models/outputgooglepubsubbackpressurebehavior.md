# OutputGooglePubsubBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGooglePubsubBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGooglePubsubBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```