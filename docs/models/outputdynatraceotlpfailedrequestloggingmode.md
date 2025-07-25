# OutputDynatraceOtlpFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputDynatraceOtlpFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputDynatraceOtlpFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```