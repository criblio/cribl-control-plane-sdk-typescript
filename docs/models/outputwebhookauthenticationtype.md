# OutputWebhookAuthenticationType

Authentication method to use for the HTTP request

## Example Usage

```typescript
import { OutputWebhookAuthenticationType } from "cribl-control-plane/models";

let value: OutputWebhookAuthenticationType = "oauth";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```