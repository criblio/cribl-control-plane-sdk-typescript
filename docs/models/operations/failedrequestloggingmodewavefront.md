# FailedRequestLoggingModeWavefront

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeWavefront } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeWavefront = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```