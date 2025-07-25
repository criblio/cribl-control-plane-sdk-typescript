# InputAzureBlobAuthenticationMethod

## Example Usage

```typescript
import { InputAzureBlobAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: InputAzureBlobAuthenticationMethod = "clientSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```