# AuthenticationTypeOptionsLokiAuth

Loki logs authentication type

## Example Usage

```typescript
import { AuthenticationTypeOptionsLokiAuth } from "cribl-control-plane/models";

let value: AuthenticationTypeOptionsLokiAuth = "token";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```