# CreateInputSystemByPackLogLevelSplunkSearch

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelSplunkSearch } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelSplunkSearch = "debug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```