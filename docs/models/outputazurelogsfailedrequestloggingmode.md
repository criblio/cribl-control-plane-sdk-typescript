# OutputAzureLogsFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputAzureLogsFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputAzureLogsFailedRequestLoggingMode = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```