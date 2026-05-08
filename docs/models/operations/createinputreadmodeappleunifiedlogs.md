# CreateInputReadModeAppleUnifiedLogs

Read all log entries (historical and upcoming), or only upcoming, from the last entry

## Example Usage

```typescript
import { CreateInputReadModeAppleUnifiedLogs } from "cribl-control-plane/models/operations";

let value: CreateInputReadModeAppleUnifiedLogs = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```