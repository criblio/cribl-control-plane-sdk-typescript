# OutputAzureLogsMode

In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.

## Example Usage

```typescript
import { OutputAzureLogsMode } from "cribl-control-plane/models";

let value: OutputAzureLogsMode = "backpressure";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "always" | "backpressure" | Unrecognized<string>
```