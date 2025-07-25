# OutputDynatraceOtlpFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputDynatraceOtlpFailedRequestLoggingMode } from "cribl-control-plane/models/operations";

let value: OutputDynatraceOtlpFailedRequestLoggingMode = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payload" | "payloadAndHeaders" | "none" | Unrecognized<string>
```