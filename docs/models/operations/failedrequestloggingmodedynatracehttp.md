# FailedRequestLoggingModeDynatraceHTTP

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeDynatraceHTTP = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```