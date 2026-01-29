# CreateInputSystemByPackLogLevelPrometheus

Collector runtime log level

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelPrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelPrometheus = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```