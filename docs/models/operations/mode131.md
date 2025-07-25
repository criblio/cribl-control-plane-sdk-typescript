# Mode131

In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.

## Example Usage

```typescript
import { Mode131 } from "cribl-control-plane/models/operations";

let value: Mode131 = "always";
```

## Values

```typescript
"error" | "backpressure" | "always"
```