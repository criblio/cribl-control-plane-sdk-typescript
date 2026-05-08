# SeverityDatadog

Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.

## Example Usage

```typescript
import { SeverityDatadog } from "cribl-control-plane/models";

let value: SeverityDatadog = "debug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"emergency" | "alert" | "critical" | "error" | "warning" | "notice" | "info" | "debug" | Unrecognized<string>
```