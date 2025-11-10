# OutputXsiamAuthenticationMethod1

Enter a token directly, or provide a secret referencing a token

## Example Usage

```typescript
import { OutputXsiamAuthenticationMethod1 } from "cribl-control-plane/models";

let value: OutputXsiamAuthenticationMethod1 = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"token" | "secret" | Unrecognized<string>
```