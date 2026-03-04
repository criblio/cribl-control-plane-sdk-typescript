# CreateInputSystemByPackLogLevelOpenai

Collector runtime log level.

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelOpenai } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelOpenai = "silly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```