# CreateOutputTelemetryType

## Example Usage

```typescript
import { CreateOutputTelemetryType } from "cribl-control-plane/models/operations";

let value: CreateOutputTelemetryType = "logs";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"logs" | "metrics" | Unrecognized<string>
```