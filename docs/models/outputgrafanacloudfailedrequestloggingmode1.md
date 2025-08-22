# OutputGrafanaCloudFailedRequestLoggingMode1

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputGrafanaCloudFailedRequestLoggingMode1 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudFailedRequestLoggingMode1 = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```