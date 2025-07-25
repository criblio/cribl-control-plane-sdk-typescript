# OutputGoogleChronicleBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGoogleChronicleBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGoogleChronicleBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```