# OutputGrafanaCloudMode2

In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.

## Example Usage

```typescript
import { OutputGrafanaCloudMode2 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudMode2 = "always";
```

## Values

```typescript
"error" | "backpressure" | "always"
```