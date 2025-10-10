# OutputDatabricksAuthenticationMethod

Unity Catalog authentication method. Choose Manual to enter credentials directly, or Secret to use a stored secret.

## Example Usage

```typescript
import { OutputDatabricksAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputDatabricksAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```