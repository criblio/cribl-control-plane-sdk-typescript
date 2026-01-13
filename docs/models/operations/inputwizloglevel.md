# InputWizLogLevel

Collector runtime log level

## Example Usage

```typescript
import { InputWizLogLevel } from "cribl-control-plane/models/operations";

let value: InputWizLogLevel = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```