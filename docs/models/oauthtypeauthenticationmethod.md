# OauthTypeAuthenticationMethod

The type of OAuth 2.0 client credentials grant flow to use

## Example Usage

```typescript
import { OauthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: OauthTypeAuthenticationMethod = "clientSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientSecret" | "clientTextSecret" | "certificate" | Unrecognized<string>
```