# CreateInputSystemByPackAuthenticationMethodOffice365MsgTrace

Select authentication method.

## Example Usage

```typescript
import { CreateInputSystemByPackAuthenticationMethodOffice365MsgTrace } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuthenticationMethodOffice365MsgTrace =
  "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "oauth" | "oauthSecret" | "oauthCert" | Unrecognized<string>
```