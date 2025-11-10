# ServerSideEncryptionOptions

## Example Usage

```typescript
import { ServerSideEncryptionOptions } from "cribl-control-plane/models";

let value: ServerSideEncryptionOptions = "aws:kms";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | "aws:kms" | Unrecognized<string>
```