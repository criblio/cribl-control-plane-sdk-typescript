# OutputS3BackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputS3BackpressureBehavior } from "cribl-control-plane/models";

let value: OutputS3BackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop"
```