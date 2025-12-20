# CollectorHealthCheckRetryType10

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { CollectorHealthCheckRetryType10 } from "cribl-control-plane/models";

let value: CollectorHealthCheckRetryType10 = "backoff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```