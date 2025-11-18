# PqModeElastic

With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.

## Example Usage

```typescript
import { PqModeElastic } from "cribl-control-plane/models";

let value: PqModeElastic = "smart";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"smart" | "always" | Unrecognized<string>
```