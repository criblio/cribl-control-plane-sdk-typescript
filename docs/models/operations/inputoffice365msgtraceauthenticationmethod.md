# InputOffice365MsgTraceAuthenticationMethod

Select authentication method.

## Example Usage

```typescript
import { InputOffice365MsgTraceAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: InputOffice365MsgTraceAuthenticationMethod = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "oauth" | "oauthSecret" | "oauthCert" | Unrecognized<string>
```