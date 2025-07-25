# OutputStatsdExtBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputStatsdExtBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputStatsdExtBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```