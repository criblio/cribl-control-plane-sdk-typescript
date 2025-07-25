# OutputGoogleChronicleFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputGoogleChronicleFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputGoogleChronicleFailedRequestLoggingMode = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```