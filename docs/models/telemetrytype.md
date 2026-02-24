# TelemetryType

## Example Usage

```typescript
import { TelemetryType } from "cribl-control-plane/models";

let value: TelemetryType = "metrics";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```