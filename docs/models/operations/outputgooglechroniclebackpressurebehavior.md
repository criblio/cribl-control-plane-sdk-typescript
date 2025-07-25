# OutputGoogleChronicleBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGoogleChronicleBackpressureBehavior } from "cribl-control-plane/models/operations";

let value: OutputGoogleChronicleBackpressureBehavior = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```