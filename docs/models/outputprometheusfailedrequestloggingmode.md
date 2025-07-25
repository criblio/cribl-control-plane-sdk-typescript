# OutputPrometheusFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputPrometheusFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputPrometheusFailedRequestLoggingMode = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```