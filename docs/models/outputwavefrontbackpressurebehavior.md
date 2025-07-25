# OutputWavefrontBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputWavefrontBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputWavefrontBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```