# OutputElasticFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputElasticFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputElasticFailedRequestLoggingMode = "payloadAndHeaders";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```