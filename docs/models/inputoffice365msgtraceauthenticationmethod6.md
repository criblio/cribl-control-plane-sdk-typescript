# InputOffice365MsgTraceAuthenticationMethod6

Select authentication method.

## Example Usage

```typescript
import { InputOffice365MsgTraceAuthenticationMethod6 } from "cribl-control-plane/models";

let value: InputOffice365MsgTraceAuthenticationMethod6 = "oauthCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "oauth" | "oauthSecret" | "oauthCert" | Unrecognized<string>
```