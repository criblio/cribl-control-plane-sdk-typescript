# LogLevelOptions

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { LogLevelOptions } from "cribl-control-plane/models";

let value: LogLevelOptions = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```