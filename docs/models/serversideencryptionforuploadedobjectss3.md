# ServerSideEncryptionForUploadedObjectsS3

## Example Usage

```typescript
import { ServerSideEncryptionForUploadedObjectsS3 } from "cribl-control-plane/models";

let value: ServerSideEncryptionForUploadedObjectsS3 = "AES256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | Unrecognized<string>
```