# OutputDatasetSeverity

Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.

## Example Usage

```typescript
import { OutputDatasetSeverity } from "cribl-control-plane/models";

let value: OutputDatasetSeverity = "finest";
```

## Values

```typescript
"finest" | "finer" | "fine" | "info" | "warning" | "error" | "fatal"
```