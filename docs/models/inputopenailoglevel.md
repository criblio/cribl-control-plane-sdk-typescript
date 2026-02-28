# InputOpenaiLogLevel

Collector runtime log level.

## Example Usage

```typescript
import { InputOpenaiLogLevel } from "cribl-control-plane/models";

let value: InputOpenaiLogLevel = "silly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```