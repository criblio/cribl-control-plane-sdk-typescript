# CreateInputSystemByPackProtocol

Select whether to leverage gRPC or HTTP for OpenTelemetry

## Example Usage

```typescript
import { CreateInputSystemByPackProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackProtocol = "grpc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"grpc" | "http" | Unrecognized<string>
```