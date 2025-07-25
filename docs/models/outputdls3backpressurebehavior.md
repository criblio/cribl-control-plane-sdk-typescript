# OutputDlS3BackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputDlS3BackpressureBehavior } from "cribl-control-plane/models";

let value: OutputDlS3BackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop"
```