# TelemetryType6

## Example Usage

```typescript
import { TelemetryType6 } from "cribl-control-plane/models";

let value: TelemetryType6 = "metrics";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```