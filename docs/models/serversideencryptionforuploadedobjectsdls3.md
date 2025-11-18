# ServerSideEncryptionForUploadedObjectsDlS3

## Example Usage

```typescript
import { ServerSideEncryptionForUploadedObjectsDlS3 } from "cribl-control-plane/models";

let value: ServerSideEncryptionForUploadedObjectsDlS3 = "aws:kms";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | Unrecognized<string>
```