# OutputSumoLogicFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputSumoLogicFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputSumoLogicFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```