# CreateInputSystemByPackProtocol

Select whether to leverage gRPC or HTTP for OpenTelemetry

## Example Usage

```typescript
import { CreateInputSystemByPackProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackProtocol = "grpc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```