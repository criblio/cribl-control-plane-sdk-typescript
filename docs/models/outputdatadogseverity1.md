# OutputDatadogSeverity1

Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.

## Example Usage

```typescript
import { OutputDatadogSeverity1 } from "cribl-control-plane/models";

let value: OutputDatadogSeverity1 = "alert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"emergency" | "alert" | "critical" | "error" | "warning" | "notice" | "info" | "debug" | Unrecognized<string>
```