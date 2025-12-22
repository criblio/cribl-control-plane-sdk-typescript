# AuthenticationMethodOffice365Mgmt

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodOffice365Mgmt = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```