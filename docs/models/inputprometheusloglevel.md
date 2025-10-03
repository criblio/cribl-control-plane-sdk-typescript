# InputPrometheusLogLevel

Collector runtime Log Level

## Example Usage

```typescript
import { InputPrometheusLogLevel } from "cribl-control-plane/models";

let value: InputPrometheusLogLevel = "debug";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```