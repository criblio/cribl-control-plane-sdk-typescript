# OutputProtocolOpenTelemetry

Select a transport option for OpenTelemetry

## Example Usage

```typescript
import { OutputProtocolOpenTelemetry } from "cribl-control-plane/models";

let value: OutputProtocolOpenTelemetry = "grpc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```