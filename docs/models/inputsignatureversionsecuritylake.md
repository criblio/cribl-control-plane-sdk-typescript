# InputSignatureVersionSecurityLake

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { InputSignatureVersionSecurityLake } from "cribl-control-plane/models";

let value: InputSignatureVersionSecurityLake = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```