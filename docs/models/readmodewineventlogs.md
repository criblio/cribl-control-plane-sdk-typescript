# ReadModeWinEventLogs

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { ReadModeWinEventLogs } from "cribl-control-plane/models";

let value: ReadModeWinEventLogs = "oldest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```