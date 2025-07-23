# InputOpenTelemetryOTLPVersion

The version of OTLP Protobuf definitions to use when interpreting received data

## Example Usage

```typescript
import { InputOpenTelemetryOTLPVersion } from "cribl-control-plane/models";

let value: InputOpenTelemetryOTLPVersion = "0.10.0";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"0.10.0" | "1.3.1" | Unrecognized<string>
```