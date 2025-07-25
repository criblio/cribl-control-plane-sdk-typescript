# OutputCriblHttpFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputCriblHttpFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputCriblHttpFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```