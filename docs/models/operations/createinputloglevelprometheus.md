# CreateInputLogLevelPrometheus

Collector runtime log level

## Example Usage

```typescript
import { CreateInputLogLevelPrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelPrometheus = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```