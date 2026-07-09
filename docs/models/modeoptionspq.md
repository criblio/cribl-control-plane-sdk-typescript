# ModeOptionsPq

With Smart mode (deprecated), PQ will write events to the filesystem only when it detects backpressure from the processing engine. Smart mode will have no new development starting July 2026, followed by End of Support and feature removal (auto-migrating to Always On) in January 2027. We recommend using Always On mode instead. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.

## Example Usage

```typescript
import { ModeOptionsPq } from "cribl-control-plane/models";

let value: ModeOptionsPq = "smart";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"smart" | "always" | Unrecognized<string>
```