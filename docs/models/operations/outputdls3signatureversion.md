# OutputDlS3SignatureVersion

Signature version to use for signing S3 requests

## Example Usage

```typescript
import { OutputDlS3SignatureVersion } from "cribl-control-plane/models/operations";

let value: OutputDlS3SignatureVersion = "v4";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```