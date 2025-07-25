# OutputAzureBlobAuthenticationMethod

## Example Usage

```typescript
import { OutputAzureBlobAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: OutputAzureBlobAuthenticationMethod = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```