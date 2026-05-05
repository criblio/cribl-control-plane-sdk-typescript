# OutputResponseOutputDatasetSeverity

Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.

## Example Usage

```typescript
import { OutputResponseOutputDatasetSeverity } from "cribl-control-plane/models";

let value: OutputResponseOutputDatasetSeverity = "fine";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"finest" | "finer" | "fine" | "info" | "warning" | "error" | "fatal" | Unrecognized<string>
```