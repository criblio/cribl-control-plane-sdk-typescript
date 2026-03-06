# InputOpenTelemetryProtocol

Select whether to leverage gRPC or HTTP for OpenTelemetry

## Example Usage

```typescript
import { InputOpenTelemetryProtocol } from "cribl-control-plane/models";

let value: InputOpenTelemetryProtocol = "http";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"grpc" | "http" | Unrecognized<string>
```