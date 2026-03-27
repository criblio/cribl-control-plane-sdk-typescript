# InputWizLogLevel

Collector runtime log level

## Example Usage

```typescript
import { InputWizLogLevel } from "cribl-control-plane/models";

let value: InputWizLogLevel = "warn";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```