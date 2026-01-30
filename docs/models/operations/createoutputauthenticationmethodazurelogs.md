# CreateOutputAuthenticationMethodAzureLogs

Enter workspace ID and workspace key directly, or select a stored secret

## Example Usage

```typescript
import { CreateOutputAuthenticationMethodAzureLogs } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationMethodAzureLogs = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```