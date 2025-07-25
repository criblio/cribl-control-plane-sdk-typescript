# OutputKinesisBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputKinesisBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputKinesisBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```