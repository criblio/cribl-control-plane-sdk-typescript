# OutputHoneycombBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputHoneycombBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputHoneycombBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```