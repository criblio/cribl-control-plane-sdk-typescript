# LogLevelOpenai

Collector runtime log level.

## Example Usage

```typescript
import { LogLevelOpenai } from "cribl-control-plane/models";

let value: LogLevelOpenai = "warn";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```