# OutputSentinelOneAiSiemFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputSentinelOneAiSiemFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputSentinelOneAiSiemFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```