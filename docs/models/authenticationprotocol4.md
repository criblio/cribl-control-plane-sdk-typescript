# AuthenticationProtocol4

## Example Usage

```typescript
import { AuthenticationProtocol4 } from "cribl-control-plane/models";

let value: AuthenticationProtocol4 = "md5";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "md5" | "sha" | "sha224" | "sha256" | "sha384" | "sha512" | Unrecognized<string>
```