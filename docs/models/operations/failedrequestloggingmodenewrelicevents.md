# FailedRequestLoggingModeNewrelicEvents

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeNewrelicEvents } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeNewrelicEvents = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```