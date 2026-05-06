# CreateInputReadModeWinEventLogs

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { CreateInputReadModeWinEventLogs } from "cribl-control-plane/models/operations";

let value: CreateInputReadModeWinEventLogs = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```