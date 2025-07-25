# FailedRequestLoggingModeOpenTelemetry

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeOpenTelemetry } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeOpenTelemetry = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```