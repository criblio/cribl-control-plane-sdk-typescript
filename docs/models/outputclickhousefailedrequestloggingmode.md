# OutputClickHouseFailedRequestLoggingMode

Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.

## Example Usage

```typescript
import { OutputClickHouseFailedRequestLoggingMode } from "cribl-control-plane/models";

let value: OutputClickHouseFailedRequestLoggingMode = "none";
```

## Values

```typescript
"payload" | "payloadAndHeaders" | "none"
```