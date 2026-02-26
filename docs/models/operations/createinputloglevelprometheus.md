# CreateInputLogLevelPrometheus

Collector runtime log level

## Example Usage

```typescript
import { CreateInputLogLevelPrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelPrometheus = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```