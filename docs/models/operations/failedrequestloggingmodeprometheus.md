# FailedRequestLoggingModePrometheus

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModePrometheus } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModePrometheus = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```