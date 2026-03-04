# CreateOutputOauthTypeAuthenticationMethod

The type of OAuth 2.0 client credentials grant flow to use

## Example Usage

```typescript
import { CreateOutputOauthTypeAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: CreateOutputOauthTypeAuthenticationMethod = "clientTextSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"clientSecret" | "clientTextSecret" | "certificate" | Unrecognized<string>
```