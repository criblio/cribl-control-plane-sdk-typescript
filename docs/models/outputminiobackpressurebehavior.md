# OutputMinioBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputMinioBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputMinioBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop"
```