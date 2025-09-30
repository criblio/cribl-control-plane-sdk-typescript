# OutputDlS3ServerSideEncryptionForUploadedObjects

## Example Usage

```typescript
import { OutputDlS3ServerSideEncryptionForUploadedObjects } from "cribl-control-plane/models";

let value: OutputDlS3ServerSideEncryptionForUploadedObjects = "AES256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | Unrecognized<string>
```