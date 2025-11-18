# InputSignatureVersionS3

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { InputSignatureVersionS3 } from "cribl-control-plane/models";

let value: InputSignatureVersionS3 = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```