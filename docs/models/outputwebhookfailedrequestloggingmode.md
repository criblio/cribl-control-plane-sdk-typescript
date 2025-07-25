# OutputWebhookFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputWebhookFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputWebhookFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```