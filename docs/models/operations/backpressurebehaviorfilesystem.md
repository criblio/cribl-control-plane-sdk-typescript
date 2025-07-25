# BackpressureBehaviorFilesystem

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorFilesystem } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorFilesystem = "block";
```

## Values

```typescript
"block" | "drop"
```