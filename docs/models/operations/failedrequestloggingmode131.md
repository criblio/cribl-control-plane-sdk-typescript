# FailedRequestLoggingMode131

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingMode131 } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingMode131 = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```