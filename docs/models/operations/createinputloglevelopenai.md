# CreateInputLogLevelOpenai

Collector runtime log level.

## Example Usage

```typescript
import { CreateInputLogLevelOpenai } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelOpenai = "info";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```