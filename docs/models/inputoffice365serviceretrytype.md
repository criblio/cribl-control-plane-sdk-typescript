# InputOffice365ServiceRetryType

The algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { InputOffice365ServiceRetryType } from "cribl-control-plane/models";

let value: InputOffice365ServiceRetryType = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```