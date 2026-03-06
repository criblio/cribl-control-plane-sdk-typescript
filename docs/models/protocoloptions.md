# ProtocolOptions

Select a transport option for OpenTelemetry

## Example Usage

```typescript
import { ProtocolOptions } from "cribl-control-plane/models";

let value: ProtocolOptions = "http";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"grpc" | "http" | Unrecognized<string>
```