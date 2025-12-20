# CollectorHealthCheckRetryType1

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { CollectorHealthCheckRetryType1 } from "cribl-control-plane/models";

let value: CollectorHealthCheckRetryType1 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```