# AuthConfigType

## Example Usage

```typescript
import { AuthConfigType } from "cribl-control-plane/models";

let value: AuthConfigType = "splunk";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ldap" | "splunk" | "local" | "openid" | "saas" | "saml" | Unrecognized<string>
```