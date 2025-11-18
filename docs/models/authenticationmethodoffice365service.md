# AuthenticationMethodOffice365Service

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOffice365Service } from "cribl-control-plane/models";

let value: AuthenticationMethodOffice365Service = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```