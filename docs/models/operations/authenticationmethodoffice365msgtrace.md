# AuthenticationMethodOffice365MsgTrace

Select authentication method.

## Example Usage

```typescript
import { AuthenticationMethodOffice365MsgTrace } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodOffice365MsgTrace = "oauthSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "oauth" | "oauthSecret" | "oauthCert" | Unrecognized<string>
```