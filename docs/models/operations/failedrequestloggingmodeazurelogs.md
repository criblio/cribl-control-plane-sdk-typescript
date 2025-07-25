# FailedRequestLoggingModeAzureLogs

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeAzureLogs } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeAzureLogs = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```