# LogLevelOptions

Log Level (verbosity) for collection runtime behavior.

## Example Usage

```typescript
import { LogLevelOptions } from "cribl-control-plane/models";

let value: LogLevelOptions = "warn";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```