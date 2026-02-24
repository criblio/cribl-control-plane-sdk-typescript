# RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseAuthentication

Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers.

## Example Usage

```typescript
import { RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseAuthentication } from "cribl-control-plane/models";

let value:
  RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalseAuthentication =
    "google_oauthSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "basicSecret" | "login" | "loginSecret" | "oauth" | "oauthSecret" | "google_oauth" | "google_oauthSecret" | "hmac" | Unrecognized<string>
```