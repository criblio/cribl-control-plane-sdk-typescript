# FailedRequestLoggingModeHoneycomb

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeHoneycomb } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeHoneycomb = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```