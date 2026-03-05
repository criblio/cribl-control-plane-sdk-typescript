# CreateInputLogLevelWiz

Collector runtime log level

## Example Usage

```typescript
import { CreateInputLogLevelWiz } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelWiz = "info";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```