# LogLevelWiz

Collector runtime log level

## Example Usage

```typescript
import { LogLevelWiz } from "cribl-control-plane/models/operations";

let value: LogLevelWiz = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```