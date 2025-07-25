# FailedRequestLoggingModeInfluxdb

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeInfluxdb } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeInfluxdb = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```