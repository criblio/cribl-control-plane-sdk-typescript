# CollectorAzureBlobAuthenticationMethod3

Enter authentication data directly, or select a secret referencing your auth data

## Example Usage

```typescript
import { CollectorAzureBlobAuthenticationMethod3 } from "cribl-control-plane/models";

let value: CollectorAzureBlobAuthenticationMethod3 = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```