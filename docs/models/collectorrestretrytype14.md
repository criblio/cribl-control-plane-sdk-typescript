# CollectorRestRetryType14

Algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { CollectorRestRetryType14 } from "cribl-control-plane/models";

let value: CollectorRestRetryType14 = "backoff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```