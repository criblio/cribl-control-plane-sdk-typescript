# InputProtocolOpenTelemetry

Select whether to leverage gRPC or HTTP for OpenTelemetry

## Example Usage

```typescript
import { InputProtocolOpenTelemetry } from "cribl-control-plane/models";

let value: InputProtocolOpenTelemetry = "http";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```