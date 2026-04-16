# LogLevelOptionsDebugError

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { LogLevelOptionsDebugError } from "cribl-control-plane/models";

let value: LogLevelOptionsDebugError = "silly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```