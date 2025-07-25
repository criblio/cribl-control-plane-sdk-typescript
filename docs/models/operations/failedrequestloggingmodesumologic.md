# FailedRequestLoggingModeSumoLogic

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeSumoLogic } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeSumoLogic = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```