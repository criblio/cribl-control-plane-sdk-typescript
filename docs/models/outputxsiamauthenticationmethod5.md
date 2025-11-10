# OutputXsiamAuthenticationMethod5

Enter a token directly, or provide a secret referencing a token

## Example Usage

```typescript
import { OutputXsiamAuthenticationMethod5 } from "cribl-control-plane/models";

let value: OutputXsiamAuthenticationMethod5 = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"token" | "secret" | Unrecognized<string>
```