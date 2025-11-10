# TelemetryType7

## Example Usage

```typescript
import { TelemetryType7 } from "cribl-control-plane/models";

let value: TelemetryType7 = "logs";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```