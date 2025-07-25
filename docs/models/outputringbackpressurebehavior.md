# OutputRingBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputRingBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputRingBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop"
```