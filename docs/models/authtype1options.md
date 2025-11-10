# AuthType1Options

## Example Usage

```typescript
import { AuthType1Options } from "cribl-control-plane/models";

let value: AuthType1Options = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```