# OutputHoneycombAuthenticationMethod

Enter API key directly, or select a stored secret

## Example Usage

```typescript
import { OutputHoneycombAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: OutputHoneycombAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```