# FailedRequestLoggingModeElastic

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeElastic } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeElastic = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```