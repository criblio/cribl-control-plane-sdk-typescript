# RetryTypeOffice365Mgmt

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { RetryTypeOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: RetryTypeOffice365Mgmt = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```