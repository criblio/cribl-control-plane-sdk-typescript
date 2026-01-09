# SplunkAuthenticationTokenRetryType

Algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { SplunkAuthenticationTokenRetryType } from "cribl-control-plane/models";

let value: SplunkAuthenticationTokenRetryType = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```