# OutputStatsdBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputStatsdBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputStatsdBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```