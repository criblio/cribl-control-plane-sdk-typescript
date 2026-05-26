# LogLevelSplunkSearch

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { LogLevelSplunkSearch } from "cribl-control-plane/models";

let value: LogLevelSplunkSearch = "warn";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```