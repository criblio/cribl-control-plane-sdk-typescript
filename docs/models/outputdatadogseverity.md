# OutputDatadogSeverity

Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.

## Example Usage

```typescript
import { OutputDatadogSeverity } from "cribl-control-plane/models";

let value: OutputDatadogSeverity = "info";
```

## Values

```typescript
"emergency" | "alert" | "critical" | "error" | "warning" | "notice" | "info" | "debug"
```