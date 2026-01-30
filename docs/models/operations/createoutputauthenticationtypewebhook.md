# CreateOutputAuthenticationTypeWebhook

Authentication method to use for the HTTP request

## Example Usage

```typescript
import { CreateOutputAuthenticationTypeWebhook } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationTypeWebhook = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```