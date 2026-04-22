# GrantType

ServiceNow OAuth grant type used for token requests

## Example Usage

```typescript
import { GrantType } from "cribl-control-plane/models";

let value: GrantType = "client_credentials";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"client_credentials" | "password" | Unrecognized<string>
```