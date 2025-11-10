# OutputXsiamAuthenticationMethod6

Enter a token directly, or provide a secret referencing a token

## Example Usage

```typescript
import { OutputXsiamAuthenticationMethod6 } from "cribl-control-plane/models";

let value: OutputXsiamAuthenticationMethod6 = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"token" | "secret" | Unrecognized<string>
```