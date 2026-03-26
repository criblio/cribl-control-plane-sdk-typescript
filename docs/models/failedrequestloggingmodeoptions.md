# FailedRequestLoggingModeOptions

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { FailedRequestLoggingModeOptions } from "cribl-control-plane/models";

let value: FailedRequestLoggingModeOptions = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none" | Unrecognized<string>
```