# InputSplunkSearchLogLevel

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { InputSplunkSearchLogLevel } from "cribl-control-plane/models/operations";

let value: InputSplunkSearchLogLevel = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```