# InputAppleUnifiedLogsReadMode

Read all log entries (historical and upcoming), or only upcoming, from the last entry

## Example Usage

```typescript
import { InputAppleUnifiedLogsReadMode } from "cribl-control-plane/models";

let value: InputAppleUnifiedLogsReadMode = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```