# RetryTypeOffice365Service

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { RetryTypeOffice365Service } from "cribl-control-plane/models";

let value: RetryTypeOffice365Service = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```