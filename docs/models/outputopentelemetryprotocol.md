# OutputOpenTelemetryProtocol

Select a transport option for OpenTelemetry

## Example Usage

```typescript
import { OutputOpenTelemetryProtocol } from "cribl-control-plane/models";

let value: OutputOpenTelemetryProtocol = "grpc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```