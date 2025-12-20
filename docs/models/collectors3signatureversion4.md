# CollectorS3SignatureVersion4

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { CollectorS3SignatureVersion4 } from "cribl-control-plane/models";

let value: CollectorS3SignatureVersion4 = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```