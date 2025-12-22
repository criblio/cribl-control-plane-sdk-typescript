# CreateOutputAuthenticationMethodAzureBlob

## Example Usage

```typescript
import { CreateOutputAuthenticationMethodAzureBlob } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationMethodAzureBlob = "clientSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```