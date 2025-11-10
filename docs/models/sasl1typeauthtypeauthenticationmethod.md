# Sasl1TypeAuthTypeAuthenticationMethod

Enter password directly, or select a stored secret

## Example Usage

```typescript
import { Sasl1TypeAuthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: Sasl1TypeAuthTypeAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```