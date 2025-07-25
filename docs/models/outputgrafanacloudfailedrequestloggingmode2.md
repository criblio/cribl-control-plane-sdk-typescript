# OutputGrafanaCloudFailedRequestLoggingMode2

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputGrafanaCloudFailedRequestLoggingMode2 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudFailedRequestLoggingMode2 = "payload";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```