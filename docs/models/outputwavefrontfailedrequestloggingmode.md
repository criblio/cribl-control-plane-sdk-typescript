# OutputWavefrontFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputWavefrontFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputWavefrontFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```