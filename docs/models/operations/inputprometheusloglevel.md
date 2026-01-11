# InputPrometheusLogLevel

Collector runtime log level

## Example Usage

```typescript
import { InputPrometheusLogLevel } from "cribl-control-plane/models/operations";

let value: InputPrometheusLogLevel = "debug";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```