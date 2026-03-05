# CreateOutputAuthenticationTypeWebhook

Authentication method to use for the HTTP request

## Example Usage

```typescript
import { CreateOutputAuthenticationTypeWebhook } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationTypeWebhook = "credentialsSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```