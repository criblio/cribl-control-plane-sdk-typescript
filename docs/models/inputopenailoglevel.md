# InputOpenaiLogLevel

Collector runtime log level.

## Example Usage

```typescript
import { InputOpenaiLogLevel } from "cribl-control-plane/models";

let value: InputOpenaiLogLevel = "silly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```