# CreateInputSystemByPackLogLevelPrometheus

Collector runtime log level

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelPrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelPrometheus = "warn";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```