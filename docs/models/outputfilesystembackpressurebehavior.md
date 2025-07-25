# OutputFilesystemBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputFilesystemBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputFilesystemBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop"
```