# CreateInputSystemByPackLogLevelSplunkSearch

Collector runtime log level (verbosity)

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelSplunkSearch } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelSplunkSearch = "debug";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```