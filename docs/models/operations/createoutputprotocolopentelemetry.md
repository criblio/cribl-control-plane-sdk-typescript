# CreateOutputProtocolOpenTelemetry

Select a transport option for OpenTelemetry

## Example Usage

```typescript
import { CreateOutputProtocolOpenTelemetry } from "cribl-control-plane/models/operations";

let value: CreateOutputProtocolOpenTelemetry = "grpc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```