# CollectorS3SignatureVersion5

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { CollectorS3SignatureVersion5 } from "cribl-control-plane/models";

let value: CollectorS3SignatureVersion5 = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```