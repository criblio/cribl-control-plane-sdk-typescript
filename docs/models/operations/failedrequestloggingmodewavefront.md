# FailedRequestLoggingModeWavefront

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeWavefront } from "cribl-control-plane/models/operations";

let value: FailedRequestLoggingModeWavefront = "payload";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payload" | "payloadAndHeaders" | "none" | Unrecognized<string>
```