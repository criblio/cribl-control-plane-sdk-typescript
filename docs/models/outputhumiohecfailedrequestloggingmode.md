# OutputHumioHecFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputHumioHecFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputHumioHecFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```