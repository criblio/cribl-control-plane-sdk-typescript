# TelemetryType4

## Example Usage

```typescript
import { TelemetryType4 } from "cribl-control-plane/models";

let value: TelemetryType4 = "metrics";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```