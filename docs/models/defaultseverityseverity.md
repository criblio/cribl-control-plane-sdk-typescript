# DefaultSeveritySeverity

Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.

## Example Usage

```typescript
import { DefaultSeveritySeverity } from "cribl-control-plane/models";

let value: DefaultSeveritySeverity = "finer";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"finest" | "finer" | "fine" | "info" | "warning" | "error" | "fatal" | Unrecognized<string>
```