# ProtocolServiceNow

Select a transport option for OpenTelemetry

## Example Usage

```typescript
import { ProtocolServiceNow } from "cribl-control-plane/models";

let value: ProtocolServiceNow = "grpc";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"grpc" | "http" | Unrecognized<string>
```