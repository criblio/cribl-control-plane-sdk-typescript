# CollectorSplunkRetryType7

Algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { CollectorSplunkRetryType7 } from "cribl-control-plane/models";

let value: CollectorSplunkRetryType7 = "backoff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```