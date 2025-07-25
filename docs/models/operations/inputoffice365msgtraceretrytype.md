# InputOffice365MsgTraceRetryType

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { InputOffice365MsgTraceRetryType } from "cribl-control-plane/models/operations";

let value: InputOffice365MsgTraceRetryType = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```