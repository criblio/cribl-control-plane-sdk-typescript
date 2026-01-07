# CollectorRestRetryType2

Algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { CollectorRestRetryType2 } from "cribl-control-plane/models";

let value: CollectorRestRetryType2 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```