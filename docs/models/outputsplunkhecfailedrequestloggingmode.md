# OutputSplunkHecFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputSplunkHecFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputSplunkHecFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```