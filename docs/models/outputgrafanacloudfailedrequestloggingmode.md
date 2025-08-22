# OutputGrafanaCloudFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputGrafanaCloudFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputGrafanaCloudFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```