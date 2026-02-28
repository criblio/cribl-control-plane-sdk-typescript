# CreateOutputSystemByPackAuthenticationTypeWebhook

Authentication method to use for the HTTP request

## Example Usage

```typescript
import { CreateOutputSystemByPackAuthenticationTypeWebhook } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackAuthenticationTypeWebhook = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```