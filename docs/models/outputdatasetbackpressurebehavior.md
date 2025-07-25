# OutputDatasetBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputDatasetBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputDatasetBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```