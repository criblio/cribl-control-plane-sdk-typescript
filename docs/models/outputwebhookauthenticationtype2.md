# OutputWebhookAuthenticationType2

Authentication method to use for the HTTP request

## Example Usage

```typescript
import { OutputWebhookAuthenticationType2 } from "cribl-control-plane/models";

let value: OutputWebhookAuthenticationType2 = "token";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```