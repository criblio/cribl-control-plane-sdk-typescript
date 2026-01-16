# LogLevelPrometheus

Collector runtime log level

## Example Usage

```typescript
import { LogLevelPrometheus } from "cribl-control-plane/models/operations";

let value: LogLevelPrometheus = "debug";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```