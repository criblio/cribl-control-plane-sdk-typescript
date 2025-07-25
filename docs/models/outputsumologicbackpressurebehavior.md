# OutputSumoLogicBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSumoLogicBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSumoLogicBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```