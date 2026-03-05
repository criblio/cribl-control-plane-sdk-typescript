# CreateInputProtocol

Select whether to leverage gRPC or HTTP for OpenTelemetry

## Example Usage

```typescript
import { CreateInputProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputProtocol = "grpc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"grpc" | "http" | Unrecognized<string>
```