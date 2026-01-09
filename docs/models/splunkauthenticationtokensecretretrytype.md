# SplunkAuthenticationTokenSecretRetryType

Algorithm to use when performing HTTP retries

## Example Usage

```typescript
import { SplunkAuthenticationTokenSecretRetryType } from "cribl-control-plane/models";

let value: SplunkAuthenticationTokenSecretRetryType = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "backoff" | "static" | Unrecognized<string>
```