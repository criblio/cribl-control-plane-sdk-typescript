# TelemetryType3

## Example Usage

```typescript
import { TelemetryType3 } from "cribl-control-plane/models";

let value: TelemetryType3 = "logs";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```