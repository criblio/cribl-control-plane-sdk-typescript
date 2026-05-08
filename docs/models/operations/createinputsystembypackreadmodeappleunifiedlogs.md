# CreateInputSystemByPackReadModeAppleUnifiedLogs

Read all log entries (historical and upcoming), or only upcoming, from the last entry

## Example Usage

```typescript
import { CreateInputSystemByPackReadModeAppleUnifiedLogs } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackReadModeAppleUnifiedLogs = "oldest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```