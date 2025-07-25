# OutputAzureEventhubBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputAzureEventhubBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputAzureEventhubBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```