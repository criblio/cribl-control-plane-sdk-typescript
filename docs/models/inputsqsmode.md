# InputSqsMode

With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.

## Example Usage

```typescript
import { InputSqsMode } from "cribl-control-plane/models";

let value: InputSqsMode = "smart";
```

## Values

```typescript
"smart" | "always"
```