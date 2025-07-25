# OutputOpenTelemetryFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputOpenTelemetryFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputOpenTelemetryFailedRequestLoggingMode = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```