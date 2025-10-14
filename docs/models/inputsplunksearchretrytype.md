# InputSplunkSearchRetryType

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { InputSplunkSearchRetryType } from "cribl-control-plane/models";

let value: InputSplunkSearchRetryType = "backoff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```