# EndpointGoogleCloudObservability

Fixed Google Cloud Observability gRPC endpoint. All three signals share this transport; the OTLP service path determines whether the call lands on traces, metrics, or logs.

## Example Usage

```typescript
import { EndpointGoogleCloudObservability } from "cribl-control-plane/models";

let value: EndpointGoogleCloudObservability = "telemetry.googleapis.com:443";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"telemetry.googleapis.com:443" | Unrecognized<string>
```