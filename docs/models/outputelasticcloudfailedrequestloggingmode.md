# OutputElasticCloudFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputElasticCloudFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputElasticCloudFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```