# CreateInputProxyModeAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { CreateInputProxyModeAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: CreateInputProxyModeAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "secret" | Unrecognized<string>
```