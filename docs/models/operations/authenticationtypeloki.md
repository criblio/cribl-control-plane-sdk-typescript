# AuthenticationTypeLoki

## Example Usage

```typescript
import { AuthenticationTypeLoki } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeLoki = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "token" | "textSecret" | "basic" | "credentialsSecret" | Unrecognized<string>
```