# InputOffice365ServiceAuthenticationMethod

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { InputOffice365ServiceAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: InputOffice365ServiceAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```