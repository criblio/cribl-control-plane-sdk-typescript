# OutputHoneycombBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputHoneycombBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputHoneycombBackpressureBehavior = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```