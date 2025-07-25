# OutputAzureBlobBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputAzureBlobBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputAzureBlobBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop"
```