# OutputWavefrontFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputWavefrontFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputWavefrontFailedRequestLoggingMode = "payload";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payload" | "payloadAndHeaders" | "none" | Unrecognized<string>
```