# CreateInputAuthenticationMethodAzureBlob

## Example Usage

```typescript
import { CreateInputAuthenticationMethodAzureBlob } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationMethodAzureBlob = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```