# CreateInputSystemByPackLogLevelWiz

Collector runtime log level

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelWiz } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelWiz = "debug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```