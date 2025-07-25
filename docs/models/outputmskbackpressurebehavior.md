# OutputMskBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputMskBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputMskBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```