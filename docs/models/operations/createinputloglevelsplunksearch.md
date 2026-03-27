# CreateInputLogLevelSplunkSearch

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { CreateInputLogLevelSplunkSearch } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelSplunkSearch = "debug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```