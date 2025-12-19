# CreateInputSignatureVersionS3

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { CreateInputSignatureVersionS3 } from "cribl-control-plane/models/operations";

let value: CreateInputSignatureVersionS3 = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```