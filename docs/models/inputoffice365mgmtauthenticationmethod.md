# InputOffice365MgmtAuthenticationMethod

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { InputOffice365MgmtAuthenticationMethod } from "cribl-control-plane/models";

let value: InputOffice365MgmtAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```