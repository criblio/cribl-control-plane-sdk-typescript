# OutputNewrelicEventsMode

In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.

## Example Usage

```typescript
import { OutputNewrelicEventsMode } from "cribl-control-plane/models/operations";

let value: OutputNewrelicEventsMode = "always";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "backpressure" | "always" | Unrecognized<string>
```