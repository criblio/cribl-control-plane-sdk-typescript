# OutputGraphiteBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGraphiteBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGraphiteBackpressureBehavior = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```