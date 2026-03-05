# InputSplunkSearchLogLevel

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { InputSplunkSearchLogLevel } from "cribl-control-plane/models";

let value: InputSplunkSearchLogLevel = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```