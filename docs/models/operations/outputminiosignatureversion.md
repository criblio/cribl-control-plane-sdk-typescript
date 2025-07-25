# OutputMinioSignatureVersion

Signature version to use for signing MinIO requests

## Example Usage

```typescript
import { OutputMinioSignatureVersion } from "cribl-control-plane/models/operations";

let value: OutputMinioSignatureVersion = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```