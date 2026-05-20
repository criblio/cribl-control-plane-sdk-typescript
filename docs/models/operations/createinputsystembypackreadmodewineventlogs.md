# CreateInputSystemByPackReadModeWinEventLogs

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { CreateInputSystemByPackReadModeWinEventLogs } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackReadModeWinEventLogs = "oldest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```