# OutputAzureEventhubAuthTypeAuthenticationMethod

Enter password directly, or select a stored secret

## Example Usage

```typescript
import { OutputAzureEventhubAuthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputAzureEventhubAuthTypeAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```