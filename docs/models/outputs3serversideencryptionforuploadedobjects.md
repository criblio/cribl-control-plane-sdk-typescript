# OutputS3ServerSideEncryptionForUploadedObjects

## Example Usage

```typescript
import { OutputS3ServerSideEncryptionForUploadedObjects } from "cribl-control-plane/models";

let value: OutputS3ServerSideEncryptionForUploadedObjects = "AES256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | Unrecognized<string>
```