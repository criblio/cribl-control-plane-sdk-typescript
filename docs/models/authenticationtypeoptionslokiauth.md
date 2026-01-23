# AuthenticationTypeOptionsLokiAuth

Loki logs authentication type

## Example Usage

```typescript
import { AuthenticationTypeOptionsLokiAuth } from "cribl-control-plane/models";

let value: AuthenticationTypeOptionsLokiAuth = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```