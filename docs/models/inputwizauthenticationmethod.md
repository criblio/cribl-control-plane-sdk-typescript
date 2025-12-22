# InputWizAuthenticationMethod

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { InputWizAuthenticationMethod } from "cribl-control-plane/models";

let value: InputWizAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```