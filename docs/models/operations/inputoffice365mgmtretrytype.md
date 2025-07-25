# InputOffice365MgmtRetryType

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { InputOffice365MgmtRetryType } from "cribl-control-plane/models/operations";

let value: InputOffice365MgmtRetryType = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```