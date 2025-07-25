# AuthenticationProtocol

## Example Usage

```typescript
import { AuthenticationProtocol } from "cribl-control-plane/models/operations";

let value: AuthenticationProtocol = "sha";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "md5" | "sha" | "sha224" | "sha256" | "sha384" | "sha512" | Unrecognized<string>
```